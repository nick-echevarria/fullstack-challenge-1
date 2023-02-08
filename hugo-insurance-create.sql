SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.applications (
	"_id" serial NOT NULL,
  "primary_applicant" JSONB NOT NULL, 
  "secondary_applicants" JSONB, 
  "creation_date" date NOT NULL, 
  "address" JSONB NOT NULL,
  "vehicle" JSONB NOT NULL,
	CONSTRAINT "application_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);