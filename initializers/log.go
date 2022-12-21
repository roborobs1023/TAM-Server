package initializers

import (
	"log"
	"os"
	"time"

	"gorm.io/gorm/logger"
)

type Log struct {
	Name string
	File *os.File
}

func newLog(config *Config) (logger.Interface, error) {
	var err error
	l := &Log{}
	l.Name = config.LogPath + "/TAM_DB.log"

	if _, err = os.Stat(config.LogPath); os.IsNotExist(err) {
		os.MkdirAll(config.LogPath, os.FileMode(0755))
	}

	l.File, err = os.OpenFile(l.Name, os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
	if err != nil {
		return nil, err
	}

	var logLevel logger.LogLevel

	switch config.LogLevel {
	case "Info":
		logLevel = logger.Info
	case "Silent":
		logLevel = logger.Silent
	case "Error":
		logLevel = logger.Error
	case "Warn":
		logLevel = logger.Warn
	default:
		logLevel = logger.Error
	}

	newLogger := logger.New(
		log.New(l.File, "\r\n", log.LstdFlags), // io writer
		logger.Config{
			SlowThreshold:             time.Second, // Slow SQL threshold
			LogLevel:                  logLevel,    // Log level
			IgnoreRecordNotFoundError: true,        // Ignore ErrRecordNotFound error for logger
			Colorful:                  true,        // Enable color
		},
	)

	return newLogger, nil
}
