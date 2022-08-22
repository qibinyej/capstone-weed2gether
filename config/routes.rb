Rails.application.routes.draw do
  resources :user_posts
  resources :comments
  resources :posts
  resources :users

  get "/posts", to: "posts#index"
  get "/me", to: "users#show"
  post "/post", to: "posts#create"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create" 
  post "/comment", to: "comments#create"
  delete "/posts/:id", to: "posts#destroy"
  delete "/logout", to: "sessions#destroy"
  

end
