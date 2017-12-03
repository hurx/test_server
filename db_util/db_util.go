package db_util

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
	"log"
	//"reflect"
)

func NewClient() *sql.DB {
	db, err := sql.Open("mysql", "root:xl123456@tcp(127.0.0.1:3306)/test_server?charset=utf8")
	if err != nil {
		log.Println(err)
	}
	if err := db.Ping(); err != nil {
		log.Println("%s error ping database: %s", err.Error())
		return nil
	}
	return db
}

func Select(db *sql.DB, args ...string) {
	var s string
	for _, arg := range args {
		s += (" ," + arg)
	}
	rows, err := db.Query("SELECT " + s[len(" ,"):] + " FROM  test")
	if err != nil {
		log.Println(err)
	}
	for rows.Next() {
		var id string
		var name string
		rows.Scan(&id, &name)
		log.Println("id:", id, name)
	}
}

func Insert(db *sql.DB) {

}

func Delete(db *sql.DB, id string) {}

func Update(db *sql.DB, id string) {}
