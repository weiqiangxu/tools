package main

import (
	"os"
	"path/filepath"

	"github.com/gogf/gf/v2/frame/g"
)

func main() {
	s := g.Server()
	s.SetIndexFolder(true)
	str, _ := os.Getwd()
	staticPath := filepath.Join(filepath.Dir(str), "public", "build", "home")
	s.SetServerRoot(staticPath)
	// s.BindHandler("/*", func(r *ghttp.Request) {
	// 	r.Response.RedirectTo("/")
	// })
	s.SetPort(8899)
	s.Run()
}
