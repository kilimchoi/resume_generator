class ResumeController < ApplicationController
	@infos = Info.all
	def index
		@info = Info.new
		@info.full_name = params[:full_name] rescue nil
		@info.email = params[:email] rescue nil
		@info.address = params[:address] rescue nil
		@info.work_title = params[:work_title] rescue nil
		@info.work_description = params[:work_description] rescue nil
		@info.honors_title = params[:honors_title] rescue nil
		@info.honors_description = params[:honors_description] rescue nil
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
