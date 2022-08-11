class SessionsController < ApplicationController
    def create
        user = User.find_by_username(params[:username])
        if user &.authenticate(params[:password])
            p "here"
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: ["Invalid username or password!"]}, status: :unauthorized
        end
    end

    def destroy
        session.delete(:user_id) #removing id from session/forgetting about our user
        head :no_content
    end
end
