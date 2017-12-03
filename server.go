package main

import (
	"io/ioutil"
	"log"
	"net/http"
)

func index(w http.ResponseWriter, r *http.Request) {
	index_file := "view/index.html"
	b, err := ioutil.ReadFile(index_file)
	if err != nil {
		log.Println(err)
	}
	w.Write(b)
}

func saveCases(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	log.Println(r.Form)
}

func main() {
	http.Handle("/view/", http.StripPrefix("/view/", http.FileServer(http.Dir("view"))))
	http.HandleFunc("/", index) //设置访问的路由
	http.HandleFunc("/saveCases", saveCases)
	err := http.ListenAndServe(":8888", nil) //设置监听的端口
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
