require 'rubygems'
require 'sinatra'
require 'haml'

# Helpers
require './lib/render_partial'

# Set Sinatra variables
set :app_file, __FILE__
set :root, File.dirname(__FILE__)
set :views, 'views'
set :public, 'public'
set :haml, {:format => :html5} # default Haml format is :xhtml

before do
  # response.headers['Cache-Control'] = 'public, max-age=300'
  expires 600, :public
end

# Application routes
get '/salon' do
  haml :index, :layout => :'layouts/application'
end

get '/' do
  haml :about, :layout => :'layouts/page'
end