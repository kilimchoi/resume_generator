class Info < ActiveRecord::Base
  attr_accessible :email, :full_name, :address, :work_title, :work_description, :honors_title, :honors_description, :phone, :work_date, :honors_date
  def user_data
     data = {
      :phone => self.phone,
      :email => self.email,
      :full_name => self.full_name,
      :address => self.address,
      :work_title => self.work_title,
      :work_description => self.work_description,
      :work_date => self.work_date,
      :honors_title => self.honors_title,
      :honors_description => self.honors_description,
      :honors_date => self.honors_date
     }
     return data
   end	
end
