package main

import (
	"github.com/gogf/gf/v2/frame/g"
	"os"
	"path/filepath"
)

func main() {
	s := g.Server()
	s.SetIndexFolder(true)
	str, _ := os.Getwd()
	staticPath := filepath.Join(filepath.Dir(str), "public", "build", "home")
	s.SetServerRoot(staticPath)
	s.SetPort(8899)
	s.Run()
}
