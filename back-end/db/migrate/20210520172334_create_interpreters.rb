class CreateInterpreters < ActiveRecord::Migration[6.1]
  def change
    create_table :interpreters do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :notes
      t.belongs_to :city, null: false, foreign_key: true
      t.belongs_to :language, null: false, foreign_key: true

      t.timestamps
    end
  end
end
