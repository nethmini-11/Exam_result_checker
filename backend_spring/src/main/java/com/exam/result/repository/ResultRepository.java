package com.exam.result.repository;

import java.util.List;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.exam.result.model.Result;


public interface ResultRepository extends MongoRepository<Result, String> {
  List<Result> findByPublished(boolean finalized);
  List<Result> findByTitleContaining(String name);
}

