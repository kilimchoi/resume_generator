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
		if params["commit"] == 'Generate Resume'
			redirect_to "/template"
		end
	end

	def template
		@info = Info.find_by_id(params[:id])
		@full_name = @info.full_name rescue nil
		@email = @info.email rescue nil
		@address = @info.address rescue nil
		@work_place = @info.work_place rescue nil
		@work_description = @info.work_description rescue nil
		@honors_awards_title = @info.honors_awards_title rescue nil
	end
end
