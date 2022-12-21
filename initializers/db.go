package initializers

import (
	"fmt"

	"gorm.io/driver/mysql"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// Initalize database
func NewDatabaseConnection(config *Config) (*gorm.DB, error) {
	db := &gorm.DB{}
	newLogger, err := newLog(config)
	if err != nil {
		return db, fmt.Errorf("logger error: %v", err)
	}

	//Determine which
	switch config.DbType {
	case "postgres":
		dsn := NewPostgresDSN(config)
		db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{Logger: newLogger})

		if err != nil {
			return db, err
		}
	case "mysql":
		dsn := NewMySQLDSN(config)
		db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{
			Logger: newLogger,
		})
		if err != nil {
			return db, err
		}
	default:
		dsn := NewPostgresDSN(config)

		db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{
			Logger: newLogger,
		})
		if err != nil {
			return db, err
		}
	}
	return db, nil
}
