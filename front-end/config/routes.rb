Rails.application.routes.draw do
  resources :interpreters
  resources :languages, only: [:index]
  resources :cities, only: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
