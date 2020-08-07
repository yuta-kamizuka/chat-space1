require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)
module ChatSpace
  class Application < Rails::Application
    config.load_defaults 6.0
    config.generators do |g|
    config.il8.default_locale = :ja
      g.stylesheets false
      g.javacripts false
      g.helper false
      g.test_framework false

    end
  end
end
