package main

import (
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html"
	"github.com/roborobs1023/TAM-Server/controllers"
	"github.com/roborobs1023/TAM-Server/initializers"
)

// var db *gorm.DB
var config *initializers.Config

func init() {
	initializers.LoadConfig()
	config = &initializers.Config{
		Host:       os.Getenv("DB_HOST"),
		Port:       os.Getenv("DB_PORT"),
		Password:   os.Getenv("DB_PASSWORD"),
		User:       os.Getenv("DB_USER"),
		SSLMode:    os.Getenv("DB_SSLMODE"),
		DbType:     os.Getenv("DB_TYPE"),
		DBName:     os.Getenv("DBNAME"),
		ServerPort: os.Getenv("SERVER_PORT"),
		LogPath:    os.Getenv("LOG_PATH"),
		LogLevel:   os.Getenv("LOG_LEVEL"),
	}

	/* db, err := initializers.NewDatabaseConnection(config)
	if err != nil {
		log.Fatal("Error Connecting to Database")
	} */

}

func main() {
	// Load templates
	engine := html.New("./views", ".tmpl")
	app := fiber.New(fiber.Config{
		Views: engine,
	})

	//Configure App
	app.Static("/", "./public")

	//Routing
	frontendRoutes := []string{
		"/",
		"/login",
		"/setup",
		"/about",
	}

	for _, route := range frontendRoutes {
		app.Get(route, controllers.Home)
	}

	// Start app
	app.Listen(":4000")
}
