class CreateInfos < ActiveRecord::Migration
  def change
    create_table :infos do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :honors
      t.timestamps
    end
  end
end
