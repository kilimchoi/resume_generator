class Info < ActiveRecord::Base
  attr_accessible :email, :full_name, :address, :honors_awards_title, :work_place, :work_description
  def user_data 
     data = {
      :email => self.email,
      :full_name => self.full_name,
      :address => self.address,
      :work_place => self.work_place, 
      :work_description => self.work_description,
      :honors_awards_title => self.honors_awards_title, 
     }
     return data
   end	
end
