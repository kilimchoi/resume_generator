class ResumeController < ApplicationController
	def index
		@info = Info.new
		@info.full_name = params[:full_name] rescue nil
		@info.email = params[:email] rescue nil
		@info.address = params[:address] rescue nil
		@info.work_place = params[:work_place] rescue nil
		@info.work_description = params[:work_description] rescue nil
		@info.honors_awards_title = params[:honors_awards_title] rescue nil
		@info.save
		if params["commit"] == "Generate Resume"
			redirect_to resume_template_path
		end
	end
end
