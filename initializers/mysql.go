package initializers

import "fmt"

func NewMySQLDSN(config *Config) string {
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", config.User, config.Password, config.Host, config.Port, config.DBName)
	return dsn
}
