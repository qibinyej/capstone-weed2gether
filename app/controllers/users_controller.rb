class UsersController < ApplicationController
  skip_before_action :authenticate_user, only: [:create] 
  #skip auths after create
  # before_action :set_user, only: %i[show update destroy ] 
  

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    user =User.find_by_id(session[:user_id])
    render json: user, serializer: UserAllpostsSerializer
  end

  # POST /users
  def create
   user = User.create!(user_params)
   if user.valid?
    session[:user_id] = user.id # remembering who our user
    render json: user, status: :ok

    # if user = User.authenticate(params[:username], params[:password])
    #   # Save the user ID in the session so it can be used in
    #   # subsequent requests
    #   session[:current_user_id] = user.id
    #   redirect_to root_url
    else
        render json: { errors: user.errors.full_messages}, status: :unprocessable_entity
  end

  # PATCH/PUT /users/1
  # def update
  #   if @user.update(user_params)
  #     render json: @user
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /users/1
  def destroy
    # @user.destroy

      # Remove the user id from the session
      session.delete(:current_user_id)
      # Clear the memoized current user
      @_current_user = nil
      redirect_to root_url, notice: "You have successfully logged out."
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_user
    #   @user = User.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:username, :password)
    end
end
