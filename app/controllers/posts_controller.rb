class PostsController < ApplicationController
  skip_before_action :authenticate_user, only: [:create,:index, :destroy] #sign up to create posts
  before_action :set_post, only: %i[ show update destroy ]

  # def welcome
  #   render json: {message: "Welcome to weed2gether"}
  # end
  # GET /posts
  def user_posts
    user = User.find_by_id(session[:user_id])
    posts = user.posts
    render json: posts
  end
  def index
    posts = Post.all

    render json: posts
  end

  # GET /posts/1
  def show
    post = Post.find(params[:id])
    render json: post
  end

  # POST /posts
  def create
    post = Post.new(post_params)
    post.user_id = session[:user_id]
    post.save!
    # UserPost.create!(post_id: post.id, user_id: session[:user_id])
  
    render json: post, status: :created
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    post = Post.find(params[:id])
    post.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.permit(:title, :post_body, :upvote, :user_id)
    end
end
