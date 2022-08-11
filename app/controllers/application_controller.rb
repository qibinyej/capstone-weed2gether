class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessible_entity
    # before_action :require_login


    private

    # Finds the User with the ID stored in the session with the key
    # :current_user_id This is a common way to handle user login in
    # a Rails application; logging in sets the session value and
    # logging out removes it.
    def current_user
      @_current_user ||= session[:current_user_id] &&
        User.find_by(id: session[:current_user_id])
    end

    def record_not_found(error)
      render json: { errors: errors.full_messages }, status: :not_found
      
    end

    def render_unprocessible_entity(exception)
      render json: {error: exception.errors.full_messages }, status: :unprocessable_entity
    end
end



