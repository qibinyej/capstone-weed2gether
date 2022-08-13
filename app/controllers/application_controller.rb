class ApplicationController < ActionController::API
    before_action :authenticate_user
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessible_entity
    

    def current_user
      @current_user ||= session[:user_id] && User.find_by_id(session[:user_id]) #memorization
      
    end

    private

    # Finds the User with the ID stored in the session with the key
    # :current_user_id This is a common way to handle user login in
    # a Rails application; logging in sets the session value and
    # logging out removes it.
    def authenticate_user
      render json: { errors: {User: "Not Authorized"}}, status: :unauthorized unless current_user #checking if user is logged in only
    end

    def record_not_found(record)
      render json: { errors: record.errors.full_messages }, status: :not_found
      
    end

    def render_unprocessible_entity(invalid)
      render json: {error: invalid.errors.full_messages }, status: :unprocessable_entity
    end
end



