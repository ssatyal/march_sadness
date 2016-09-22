Rails.application.routes.draw do
  resources :years do
    resources :lookslikes
  end
end
