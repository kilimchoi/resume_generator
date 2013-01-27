class Info < ActiveRecord::Base
  attr_accessible :email, :full_name, :address, :work_title, :work_description, :honors_title, :honors_description
  def user_data
     data = {
      :email => self.email,
      :full_name => self.full_name,
      :address => self.address,
      :work_title => self.work_title,
      :work_description => self.work_description,
      :honors_title => self.honors_title,
      :honors_description => self.honors_description
     }
     return data
   end	
end
