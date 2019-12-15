Rails.application.routes.draw do
  root to: "pages#fr", as: :fr
  get 'eng', to: 'pages#eng', as: :eng

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
