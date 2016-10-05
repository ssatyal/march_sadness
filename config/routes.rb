Rails.application.routes.draw do
  root to: 'years#index'
  resources :years do
    resources :lookslikes
  end
end
