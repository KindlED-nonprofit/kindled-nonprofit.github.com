-- MongoDB Collections Setup for KindlED
-- This is a reference for the collections and indexes we'll create

-- Applications Collection
-- Stores both mentor and mentee applications
db.applications.createIndex({ "email": 1 }, { unique: true })
db.applications.createIndex({ "type": 1 })
db.applications.createIndex({ "status": 1 })
db.applications.createIndex({ "fieldOfInterest": 1 })
db.applications.createIndex({ "createdAt": -1 })

-- Contacts Collection  
-- Stores contact form submissions
db.contacts.createIndex({ "email": 1 })
db.contacts.createIndex({ "status": 1 })
db.contacts.createIndex({ "createdAt": -1 })

-- Matches Collection (for future use)
-- Will store mentor-mentee pairings
db.matches.createIndex({ "mentorId": 1 })
db.matches.createIndex({ "menteeId": 1 })
db.matches.createIndex({ "status": 1 })
db.matches.createIndex({ "createdAt": -1 })
