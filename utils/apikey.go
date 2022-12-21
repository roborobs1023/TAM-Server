package utils

import (
	"math/rand"
	"time"
)

func GenerateAPIKey() string {
	rand.Seed(time.Now().UnixNano())
	var letters = []rune("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")
	b := make([]rune, 53)
	c := []rune("-")
	for i := range b {
		if (i+1)%6 == 0 {
			b[i] = c[0]
			continue
		}
		b[i] = letters[rand.Intn(len(letters))]
	}

	return string(b)

}

func HashApiKey(key string) string {
	encryptedAPIKey, err := Encrypt(key)
	if err != nil {
		return ""
	}
	return encryptedAPIKey
}

func DecryptAPIKey(key string) string {
	decrypted, err := Decrypt(key)
	if err != nil {
		return ""
	}
	return decrypted
}

func CompareAPIKey(hashedApiKey string, candidateApiKey string) bool {
	decrypted, err := Decrypt(hashedApiKey)
	if err != nil {
		return false
	}

	return decrypted == candidateApiKey
}
