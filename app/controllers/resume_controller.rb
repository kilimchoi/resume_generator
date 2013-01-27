class ResumeController < ApplicationController
	@infos = Info.all
	def index
		@info = Info.new
		@info.full_name = params[:full_name] rescue nil
		@info.email = params[:email] rescue nil
		@info.address = params[:address] rescue nil
		@info.save
		if params["commit"] == "Generate Resume"
			redirect_to :action => 'new', :id => @info.id
		end
		if params["commit"] == "Add More Work Experience"
		end
	end

	def new
		@info = Info.find(params[:id])
		@user_data  = @info.user_data
	end

end
