class AddInfo < ActiveRecord::Migration
  def change
     add_column :infos, :work_place, :string
     add_column :infos, :work_description, :string  
  end

end
