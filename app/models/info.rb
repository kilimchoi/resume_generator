class Info < ActiveRecord::Base
  attr_accessible :email, :first_name, :last_name
  def user_data 
     data = {
	:email = self.email,
	:first_name = self.first_name,
	:last_name = self.last_name,
	:address1 = self.address1,
	:address2 = self.address2, 
     }
     return data
   end	
end
