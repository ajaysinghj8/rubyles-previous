FROM ruby:2.4.1
RUN apt-get update -qq && apt-get install -y build-essential
RUN mkdir /api
WORKDIR /api
ADD Gemfile /api/Gemfile
ADD Gemfile.lock /api/Gemfile.lock
RUN bundle install
ADD . /api
