package initializers

import (
	"log"

	"github.com/joho/godotenv"
)

type Config struct {
	Host       string
	Port       string
	User       string
	Password   string
	DBName     string
	DbType     string
	SSLMode    string
	ServerPort string
	LogPath    string
	LogLevel   string
}

func LoadConfig() {
	err := godotenv.Load()

	if err != nil {
		log.Fatal("Error loading .env file")
	}
}
