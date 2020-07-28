# README

# ChatSpace DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
### Association
- has_many :messages
- has_many :users_groups
- has_many  :groups,  through:  :users_groups

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|image|string||
|user_id|integer|null :false|
|group_id|integer|null :false|
### Association
belongs_to :user
belongs_to :group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null :false|
### Association
has_many :users_groups
has_many  :users,  :through:  :users_groups
has_many :messages

## users_groupテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null :false, foreign_kye: true|
group_id|integer|null: false, foreign_kye: true|
### Association
belongs_to :user
belongs_to :group
