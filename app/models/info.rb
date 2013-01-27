class Info < ActiveRecord::Base
  attr_accessible :email, :full_name, :address
  has_many :experience
  def user_data 
     data = {
      :email => self.email,
      :full_name => self.full_name,
      :address => self.address
     }
     return data
   end	
end
