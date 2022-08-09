class SessionsController < ApplicationController
    def create
        user = User.find_by(username: params[:username])
        if user&.authentication(params[:password])
            p "here"
            session[:user_id] = user.id
            render json: user, status created
        else
            render json: {errors: ["Invalid username or password!"]}, status: :unauthorized
        end
    end

    def destroy
        session.delete(:user_id)
        head :no_content
    end
end
