class CreateInfos < ActiveRecord::Migration
  def change
    create_table :infos do |t|
      t.string :full_name
      t.string :email
      t.string :address
      t.string :work_title
      t.string :work_description
      t.string :honors_title
      t.string :honors_description
      t.timestamps
    end
  end
end
