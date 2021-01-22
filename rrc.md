



`Request Response Cycle`
dmitriymalayev@Dmitriys-Mac-mini js_reminder_backend % rails s
The dependency tzinfo-data (>= 0) will be unused by any of the platforms Bundler is installing for. Bundler is installing for ruby but the dependency is only for x86-mingw32, x86-mswin32, x64-mingw32, java. To add those platforms to the bundle, run `bundle lock --add-platform x86-mingw32 x86-mswin32 x64-mingw32 java`.
=> Booting Puma
=> Rails 6.0.3.4 application starting in development 
=> Run `rails server --help` for more startup options
Puma starting in single mode...
* Version 4.3.6 (ruby 2.6.6-p146), codename: Mysterious Traveller
* Min threads: 5, max threads: 5
* Environment: development
* Listening on tcp://127.0.0.1:3000
* Listening on tcp://[::1]:3000
Use Ctrl-C to stop
Started GET "/calendars" for ::1 at 2021-01-21 16:12:04 -0500
Started GET "/events" for ::1 at 2021-01-21 16:12:04 -0500
   (1.3ms)  SELECT "schema_migrations"."version" FROM "schema_migrations" ORDER BY "schema_migrations"."version" ASC
   (1.0ms)  SELECT "schema_migrations"."version" FROM "schema_migrations" ORDER BY "schema_migrations"."version" ASC
Processing by CalendarsController#index as JSON
  Parameters: {"calendar"=>{}}
Processing by EventsController#index as JSON
  Parameters: {"event"=>{}}
  User Load (3.1ms)  SELECT "users".* FROM "users" ORDER BY "users"."id" ASC LIMIT $1  [["LIMIT", 1]]
  User Load (3.4ms)  SELECT "users".* FROM "users" ORDER BY "users"."id" ASC LIMIT $1  [["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:3:in `current_user'
  ↳ app/controllers/application_controller.rb:3:in `current_user'
  Calendar Load (6.8ms)  SELECT "calendars".* FROM "calendars" WHERE "calendars"."user_id" = $1  [["user_id", 1]]
  ↳ app/controllers/calendars_controller.rb:7:in `index'
  Event Load (7.7ms)  SELECT "events".* FROM "events" WHERE "events"."user_id" = $1  [["user_id", 1]]
  ↳ app/controllers/events_controller.rb:7:in `index'
Completed 200 OK in 48ms (Views: 0.2ms | ActiveRecord: 42.4ms | Allocations: 16792)


  Calendar Load (0.6ms)  SELECT "calendars".* FROM "calendars" WHERE "calendars"."id" = $1 LIMIT $2  [["id", 17], ["LIMIT", 1]]
  ↳ app/controllers/events_controller.rb:7:in `index'
  Calendar Load (0.7ms)  SELECT "calendars".* FROM "calendars" WHERE "calendars"."id" = $1 LIMIT $2  [["id", 19], ["LIMIT", 1]]
  ↳ app/controllers/events_controller.rb:7:in `index'
  Calendar Load (0.4ms)  SELECT "calendars".* FROM "calendars" WHERE "calendars"."id" = $1 LIMIT $2  [["id", 18], ["LIMIT", 1]]
  ↳ app/controllers/events_controller.rb:7:in `index'
Completed 200 OK in 111ms (Views: 0.5ms | ActiveRecord: 35.6ms | Allocations: 25759)


Started POST "/events" for ::1 at 2021-01-21 16:12:49 -0500
Processing by EventsController#create as JSON
  Parameters: {"event"=>{"name"=>"a", "start_time"=>"2021-01-21T16:12", "end_time"=>"2021-01-22T16:12", "notes"=>"a", "calendar_id"=>"17"}}
  User Load (0.9ms)  SELECT "users".* FROM "users" ORDER BY "users"."id" ASC LIMIT $1  [["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:3:in `current_user'
   (0.3ms)  BEGIN
  ↳ app/controllers/events_controller.rb:18:in `create'
  Calendar Load (0.6ms)  SELECT "calendars".* FROM "calendars" WHERE "calendars"."id" = $1 LIMIT $2  [["id", 17], ["LIMIT", 1]]
  ↳ app/controllers/events_controller.rb:18:in `create'
  Event Exists? (0.9ms)  SELECT 1 AS one FROM "events" WHERE "events"."name" = $1 LIMIT $2  [["name", "a"], ["LIMIT", 1]]
  ↳ app/controllers/events_controller.rb:18:in `create'
  Event Exists? (0.4ms)  SELECT 1 AS one FROM "events" WHERE "events"."notes" = $1 LIMIT $2  [["notes", "a"], ["LIMIT", 1]]
  ↳ app/controllers/events_controller.rb:18:in `create'
  Event Create (25.0ms)  INSERT INTO "events" ("name", "start_time", "end_time", "notes", "user_id", "calendar_id", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING "id"  [["name", "a"], ["start_time", "2021-01-21 16:12:00"], ["end_time", "2021-01-22 16:12:00"], ["notes", "a"], ["user_id", 1], ["calendar_id", 17], ["created_at", "2021-01-21 21:12:49.488125"], ["updated_at", "2021-01-21 21:12:49.488125"]]
  ↳ app/controllers/events_controller.rb:18:in `create'
   (1.4ms)  COMMIT
  ↳ app/controllers/events_controller.rb:18:in `create'
Completed 201 Created in 101ms (Views: 0.3ms | ActiveRecord: 29.5ms | Allocations: 7509)


Started GET "/events" for ::1 at 2021-01-21 16:13:50 -0500
Started GET "/calendars" for ::1 at 2021-01-21 16:13:50 -0500
Processing by EventsController#index as JSON
  Parameters: {"event"=>{}}
Processing by CalendarsController#index as JSON
  Parameters: {"calendar"=>{}}
  User Load (1.6ms)  SELECT "users".* FROM "users" ORDER BY "users"."id" ASC LIMIT $1  [["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:3:in `current_user'
  User Load (1.0ms)  SELECT "users".* FROM "users" ORDER BY "users"."id" ASC LIMIT $1  [["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:3:in `current_user'
  Event Load (1.6ms)  SELECT "events".* FROM "events" WHERE "events"."user_id" = $1  [["user_id", 1]]
  Calendar Load (0.3ms)  SELECT "calendars".* FROM "calendars" WHERE "calendars"."user_id" = $1  [["user_id", 1]]
  ↳ app/controllers/events_controller.rb:7:in `index'
  ↳ app/controllers/calendars_controller.rb:7:in `index'
Completed 200 OK in 8ms (Views: 0.2ms | ActiveRecord: 1.3ms | Allocations: 3353)


  Calendar Load (1.0ms)  SELECT "calendars".* FROM "calendars" WHERE "calendars"."id" = $1 LIMIT $2  [["id", 17], ["LIMIT", 1]]
  ↳ app/controllers/events_controller.rb:7:in `index'
  Calendar Load (0.5ms)  SELECT "calendars".* FROM "calendars" WHERE "calendars"."id" = $1 LIMIT $2  [["id", 19], ["LIMIT", 1]]
  ↳ app/controllers/events_controller.rb:7:in `index'
  Calendar Load (0.2ms)  SELECT "calendars".* FROM "calendars" WHERE "calendars"."id" = $1 LIMIT $2  [["id", 18], ["LIMIT", 1]]
  ↳ app/controllers/events_controller.rb:7:in `index'
  CACHE Calendar Load (0.0ms)  SELECT "calendars".* FROM "calendars" WHERE "calendars"."id" = $1 LIMIT $2  [["id", 17], ["LIMIT", 1]]
  ↳ app/controllers/events_controller.rb:7:in `index'
Completed 200 OK in 33ms (Views: 0.6ms | ActiveRecord: 4.9ms | Allocations: 8305)


Started DELETE "/events/253" for ::1 at 2021-01-21 16:13:53 -0500
Processing by EventsController#destroy as */*
  Parameters: {"id"=>"253"}
  User Load (0.5ms)  SELECT "users".* FROM "users" ORDER BY "users"."id" ASC LIMIT $1  [["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:3:in `current_user'
  Event Load (0.4ms)  SELECT "events".* FROM "events" WHERE "events"."user_id" = $1 AND "events"."id" = $2 LIMIT $3  [["user_id", 1], ["id", 253], ["LIMIT", 1]]
  ↳ app/controllers/events_controller.rb:43:in `set_event'
   (0.2ms)  BEGIN
  ↳ app/controllers/events_controller.rb:36:in `destroy'
  Event Destroy (1.7ms)  DELETE FROM "events" WHERE "events"."id" = $1  [["id", 253]]
  ↳ app/controllers/events_controller.rb:36:in `destroy'
   (0.5ms)  COMMIT
  ↳ app/controllers/events_controller.rb:36:in `destroy'
Completed 204 No Content in 13ms (ActiveRecord: 3.3ms | Allocations: 3637)












