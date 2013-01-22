class CreateInfos < ActiveRecord::Migration
  def change
    create_table :infos do |t|
      t.string :full_name
      t.string :email
      t.string :address
      t.string :honors_awards_title
      t.timestamps
    end
  end
end
