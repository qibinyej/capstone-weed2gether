class PostsController < ApplicationController
  # skip_before_Action :authenticate_user, only: [:create] #sign up to create posts
  before_action :set_post, only: %i[ :show, :update, :destroy ]

  def welcome
    render json: {message: "Welcome to weed2gether"}
  end
  # GET /posts
  def index
    @posts = Post.all

    render json: @posts
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    user = @current_user
    post = Post.create!(post_params)
    post.user = user
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
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.permit(:title, :post_body, :upvote)
    end
end
