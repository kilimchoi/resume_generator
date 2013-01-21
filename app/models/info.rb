class Info < ActiveRecord::Base
  attr_accessible :email, :first_name, :last_name, :address1, :address2, :honors, :work_place, :work_description
  def user_data 
     data = {
	:email = self.email,
	:first_name = self.first_name,
	:last_name = self.last_name,
	:address1 = self.address1,
	:address2 = self.address2,
	:work_place = self.work_place, 
        :work_description = self.work_description,
        :honors = self.honors, 
     }
     return data
   end	
end
