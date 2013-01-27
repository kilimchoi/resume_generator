class Experience < ActiveRecord::Base
    belongs_to :info
    attr_accessible :work_title, :work_description
end
