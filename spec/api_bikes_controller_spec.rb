# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::BikesController, type: :request do
  describe 'GET #index' do
    it 'responds with 200' do
      get '/api/v1/bikes/index'
      expect(response).to have_http_status(200)
    end

    it 'returns a JSON' do
      post '/api/v1/bikes/show/1'
      expect(response).to have_http_status(200)
    end

    it 'returns a ' do
      post '/api/v1/bikes/show/1'
      json = JSON.parse(response.body)
      expect(json.first[1]['id']).to eq(1)
    end
  end
end
