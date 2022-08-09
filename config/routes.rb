Rails.application.routes.draw do
  resources :user_posts
  resources :comments
  resources :posts
  resources :users

  #Login routes
  get "/users", to: "users#index"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
