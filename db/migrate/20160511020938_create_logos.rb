class CreateLogos < ActiveRecord::Migration
  def change
    create_table :logos do |t|
      t.string :name
      t.string :src

      t.timestamps null: false
    end
  end
end
