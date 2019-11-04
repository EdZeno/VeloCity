class Api::V1::TokensController < ApplicationController
  protect_from_forgery with: :null_session
  def create
    p "I am in create"
    @user = User.find_by_email(user_params[:email])
    if @user&.authenticate(user_params[:password])
      render json: {
        token: JsonWebToken.encode(user_id: @user.id),
        email: @user.email
      }
      p 'SUCCESS'
    else
      p 'FAILED!'
      head :unauthorized
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
