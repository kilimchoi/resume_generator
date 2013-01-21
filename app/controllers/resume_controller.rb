class ResumeController < ApplicationController
   def index
      @info = Info.new
      @info.first_name = params["first_name"] rescue nil
      @info.last_name = params["last_name"] rescue nil
      @info.email = params["email"] rescue nil
      if params["commit"] == "Generate"
         @info.save
      end
      redirect_to("/index/")
   end
end
