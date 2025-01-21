var EntityRelationshipGraph = {
    "entities": {
        "canvas.access_tokens": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "developer_key_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "real_user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "last_used_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "expires_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "purpose": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "scopes": {
                    "type": "text",
                    "nullable": true
                },
                "workflow_state": {
                    "type": "\"canvas\".\"access_tokens__workflow_state\"",
                    "nullable": false
                }
            }
        },
        "canvas.abstract_courses": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.account_domains": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "host": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "account_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "host_type": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "position": {
                    "type": "integer",
                    "nullable": true
                }
            }
        },
        "canvas.account_users": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"account_users__workflow_state\"",
                    "nullable": false
                },
                "account_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "role_id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.accounts": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "name": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "parent_account_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "current_sis_batch_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "storage_quota": {
                    "type": "bigint",
                    "nullable": true
                },
                "default_storage_quota": {
                    "type": "bigint",
                    "nullable": true
                },
                "default_locale": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "default_user_storage_quota": {
                    "type": "bigint",
                    "nullable": true
                },
                "default_group_storage_quota": {
                    "type": "bigint",
                    "nullable": true
                },
                "integration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "lti_context_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "consortium_parent_account_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "course_template_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"accounts__workflow_state\"",
                    "nullable": false
                },
                "default_time_zone": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "uuid": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "sis_source_id": {
                    "type": "varchar(255)",
                    "nullable": true
                }
            }
        },
        "canvas.appointment_groups": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.assessment_question_banks": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"assessment_question_banks__workflow_state\"",
                    "nullable": false
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "context_type": {
                    "type": "\"canvas\".\"assessment_question_banks__context_type\"",
                    "nullable": false
                },
                "migration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "title": {
                    "type": "text",
                    "nullable": true
                }
            }
        },
        "canvas.assessment_questions": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "name": {
                    "type": "text",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "workflow_state": {
                    "type": "\"canvas\".\"assessment_questions__workflow_state\"",
                    "nullable": true
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "context_type": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "question_data": {
                    "type": "text",
                    "nullable": true
                },
                "assessment_question_bank_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "migration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "position": {
                    "type": "integer",
                    "nullable": true
                }
            }
        },
        "canvas.assessment_requests": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.asset_user_accesses": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "display_name": {
                    "type": "text",
                    "nullable": true
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "asset_code": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "asset_group_code": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "context_type": {
                    "type": "\"canvas\".\"asset_user_accesses__context_type\"",
                    "nullable": false
                },
                "last_access": {
                    "type": "timestamp",
                    "nullable": true
                },
                "asset_category": {
                    "type": "\"canvas\".\"asset_user_accesses__asset_category\"",
                    "nullable": true
                },
                "view_score": {
                    "type": "double precision",
                    "nullable": true
                },
                "participate_score": {
                    "type": "double precision",
                    "nullable": true
                },
                "action_level": {
                    "type": "\"canvas\".\"asset_user_accesses__action_level\"",
                    "nullable": true
                },
                "membership_type": {
                    "type": "\"canvas\".\"asset_user_accesses__membership_type\"",
                    "nullable": true
                }
            }
        },
        "canvas.assignment_groups": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "name": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"assignment_groups__workflow_state\"",
                    "nullable": false
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "context_type": {
                    "type": "\"canvas\".\"assignment_groups__context_type\"",
                    "nullable": false
                },
                "default_assignment_name": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "group_weight": {
                    "type": "double precision",
                    "nullable": true
                },
                "migration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "sis_source_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "position": {
                    "type": "integer",
                    "nullable": true
                },
                "rules": {
                    "type": "\"canvas\".\"Annotated\"",
                    "nullable": true
                }
            }
        },
        "canvas.assignment_override_students": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"assignment_override_students__workflow_state\"",
                    "nullable": false
                },
                "assignment_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "quiz_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "assignment_override_id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.assignment_overrides": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"assignment_overrides__workflow_state\"",
                    "nullable": false
                },
                "due_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "unlock_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "lock_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "all_day": {
                    "type": "boolean",
                    "nullable": true
                },
                "assignment_version": {
                    "type": "integer",
                    "nullable": true
                },
                "set_type": {
                    "type": "\"canvas\".\"assignment_overrides__set_type\"",
                    "nullable": false
                },
                "set_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "due_at_overridden": {
                    "type": "boolean",
                    "nullable": false
                },
                "unlock_at_overridden": {
                    "type": "boolean",
                    "nullable": false
                },
                "lock_at_overridden": {
                    "type": "boolean",
                    "nullable": false
                },
                "quiz_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "quiz_version": {
                    "type": "integer",
                    "nullable": true
                },
                "assignment_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "all_day_date": {
                    "type": "date",
                    "nullable": true
                },
                "title": {
                    "type": "varchar(255)",
                    "nullable": false
                }
            }
        },
        "canvas.assignments": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "integration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "lti_context_id": {
                    "type": "text",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "workflow_state": {
                    "type": "\"canvas\".\"assignments__workflow_state\"",
                    "nullable": false
                },
                "due_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "unlock_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "lock_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "points_possible": {
                    "type": "double precision",
                    "nullable": true
                },
                "grading_type": {
                    "type": "\"canvas\".\"assignments__grading_type\"",
                    "nullable": true
                },
                "submission_types": {
                    "type": "\"canvas\".\"assignments__submission_types\" ARRAY",
                    "nullable": false
                },
                "assignment_group_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "grading_standard_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "submissions_downloads": {
                    "type": "integer",
                    "nullable": false
                },
                "peer_review_count": {
                    "type": "integer",
                    "nullable": false
                },
                "peer_reviews_due_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "peer_reviews_assigned": {
                    "type": "boolean",
                    "nullable": false
                },
                "peer_reviews": {
                    "type": "boolean",
                    "nullable": false
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "context_type": {
                    "type": "\"canvas\".\"assignments__context_type\"",
                    "nullable": false
                },
                "automatic_peer_reviews": {
                    "type": "boolean",
                    "nullable": false
                },
                "all_day": {
                    "type": "boolean",
                    "nullable": false
                },
                "all_day_date": {
                    "type": "date",
                    "nullable": true
                },
                "could_be_locked": {
                    "type": "boolean",
                    "nullable": false
                },
                "migration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "grade_group_students_individually": {
                    "type": "boolean",
                    "nullable": false
                },
                "anonymous_peer_reviews": {
                    "type": "boolean",
                    "nullable": false
                },
                "turnitin_enabled": {
                    "type": "boolean",
                    "nullable": false
                },
                "allowed_extensions": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "group_category_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "freeze_on_copy": {
                    "type": "boolean",
                    "nullable": false
                },
                "only_visible_to_overrides": {
                    "type": "boolean",
                    "nullable": false
                },
                "post_to_sis": {
                    "type": "boolean",
                    "nullable": false
                },
                "moderated_grading": {
                    "type": "boolean",
                    "nullable": false
                },
                "grades_published_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "omit_from_final_grade": {
                    "type": "boolean",
                    "nullable": false
                },
                "intra_group_peer_reviews": {
                    "type": "boolean",
                    "nullable": false
                },
                "vericite_enabled": {
                    "type": "boolean",
                    "nullable": false
                },
                "anonymous_instructor_annotations": {
                    "type": "boolean",
                    "nullable": false
                },
                "duplicate_of_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "anonymous_grading": {
                    "type": "boolean",
                    "nullable": false
                },
                "graders_anonymous_to_graders": {
                    "type": "boolean",
                    "nullable": false
                },
                "grader_count": {
                    "type": "integer",
                    "nullable": false
                },
                "grader_comments_visible_to_graders": {
                    "type": "boolean",
                    "nullable": false
                },
                "grader_section_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "final_grader_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "grader_names_visible_to_final_grader": {
                    "type": "boolean",
                    "nullable": false
                },
                "allowed_attempts": {
                    "type": "integer",
                    "nullable": true
                },
                "sis_source_id": {
                    "type": "text",
                    "nullable": true
                },
                "annotatable_attachment_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "important_dates": {
                    "type": "boolean",
                    "nullable": false
                },
                "description": {
                    "type": "text",
                    "nullable": true
                },
                "position": {
                    "type": "integer",
                    "nullable": true
                },
                "title": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "turnitin_settings": {
                    "type": "\"canvas\".\"Annotated\"",
                    "nullable": true
                },
                "parent_assignment_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "type": {
                    "type": "\"canvas\".\"assignments__type\"",
                    "nullable": true
                },
                "has_sub_assignments": {
                    "type": "boolean",
                    "nullable": true
                }
            }
        },
        "canvas.attachment_associations": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "attachment_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "context_type": {
                    "type": "\"canvas\".\"attachment_associations__context_type\"",
                    "nullable": false
                }
            }
        },
        "canvas.attachments": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "workflow_state": {
                    "type": "\"canvas\".\"attachments__workflow_state\"",
                    "nullable": true
                },
                "unlock_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "lock_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "context_type": {
                    "type": "\"canvas\".\"attachments__context_type\"",
                    "nullable": true
                },
                "folder_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "filename": {
                    "type": "text",
                    "nullable": true
                },
                "locked": {
                    "type": "boolean",
                    "nullable": false
                },
                "file_state": {
                    "type": "\"canvas\".\"attachments__file_state\"",
                    "nullable": false
                },
                "media_entry_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "md5": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "replacement_attachment_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "usage_rights_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "modified_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "viewed_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "could_be_locked": {
                    "type": "boolean",
                    "nullable": true
                },
                "migration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "namespace": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "size": {
                    "type": "bigint",
                    "nullable": true
                },
                "display_name": {
                    "type": "text",
                    "nullable": true
                },
                "content_type": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "uuid": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "root_attachment_id": {
                    "type": "bigint",
                    "nullable": true
                }
            }
        },
        "canvas.authentication_providers": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.calendar_events": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"calendar_events__workflow_state\"",
                    "nullable": false
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "context_type": {
                    "type": "\"canvas\".\"calendar_events__context_type\"",
                    "nullable": false
                },
                "location_address": {
                    "type": "text",
                    "nullable": true
                },
                "start_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "end_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "context_code": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "time_zone_edited": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "parent_calendar_event_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "effective_context_code": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "participants_per_appointment": {
                    "type": "integer",
                    "nullable": true
                },
                "comments": {
                    "type": "text",
                    "nullable": true
                },
                "web_conference_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "all_day": {
                    "type": "boolean",
                    "nullable": true
                },
                "all_day_date": {
                    "type": "date",
                    "nullable": true
                },
                "migration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "important_dates": {
                    "type": "boolean",
                    "nullable": false
                },
                "location_name": {
                    "type": "text",
                    "nullable": true
                },
                "description": {
                    "type": "text",
                    "nullable": true
                },
                "title": {
                    "type": "varchar(255)",
                    "nullable": true
                }
            }
        },
        "canvas.canvadocs_annotation_contexts": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "attachment_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "submission_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "launch_id": {
                    "type": "text",
                    "nullable": false
                },
                "submission_attempt": {
                    "type": "integer",
                    "nullable": true
                }
            }
        },
        "canvas.cloned_items": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.collaborations": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "collaboration_type": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "document_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "context_type": {
                    "type": "\"canvas\".\"collaboration__context_type\"",
                    "nullable": true
                },
                "url": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "uuid": {
                    "type": "uuid",
                    "nullable": true
                },
                "data": {
                    "type": "text",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "description": {
                    "type": "text",
                    "nullable": true
                },
                "title": {
                    "type": "varchar(255)",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "varchar(255)",
                    "nullable": false
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "context_code": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "type": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "resource_link_lookup_uuid": {
                    "type": "uuid",
                    "nullable": true
                }
            }
        },
        "canvas.comment_bank_items": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"comment_bank_items__workflow_state\"",
                    "nullable": false
                },
                "course_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "comment": {
                    "type": "text",
                    "nullable": false
                }
            }
        },
        "canvas.communication_channels": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "path": {
                    "type": "varchar(255)",
                    "nullable": false
                },
                "path_type": {
                    "type": "varchar(255)",
                    "nullable": false
                },
                "pseudonym_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "bounce_count": {
                    "type": "integer",
                    "nullable": false
                },
                "confirmation_code_expires_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "confirmation_sent_count": {
                    "type": "integer",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"communication_channels__workflow_state\"",
                    "nullable": false
                },
                "position": {
                    "type": "integer",
                    "nullable": true
                }
            }
        },
        "canvas.content_exports": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.content_migrations": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "attachment_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"content_migrations__workflow_state\"",
                    "nullable": false
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "context_type": {
                    "type": "\"canvas\".\"content_migrations__context_type\"",
                    "nullable": false
                },
                "overview_attachment_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "exported_attachment_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "source_course_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "migration_type": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "child_subscription_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "migration_settings": {
                    "type": "text",
                    "nullable": true
                },
                "started_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "finished_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "progress": {
                    "type": "double precision",
                    "nullable": true
                }
            }
        },
        "canvas.content_participation_counts": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "context_type": {
                    "type": "\"canvas\".\"content_participation_counts__context_type\"",
                    "nullable": false
                },
                "unread_count": {
                    "type": "integer",
                    "nullable": false
                },
                "content_type": {
                    "type": "\"canvas\".\"content_participation_counts__content_type\"",
                    "nullable": false
                }
            }
        },
        "canvas.content_participations": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"content_participations__workflow_state\"",
                    "nullable": false
                },
                "content_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "content_type": {
                    "type": "\"canvas\".\"content_participations__content_type\"",
                    "nullable": false
                }
            }
        },
        "canvas.content_shares": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "name": {
                    "type": "varchar(255)",
                    "nullable": false
                },
                "type": {
                    "type": "\"canvas\".\"content_shares__type\"",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "content_export_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "sender_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "read_state": {
                    "type": "\"canvas\".\"content_shares__read_state\"",
                    "nullable": false
                }
            }
        },
        "canvas.content_tags": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"content_tags__workflow_state\"",
                    "nullable": false
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "context_type": {
                    "type": "\"canvas\".\"content_tags__context_type\"",
                    "nullable": false
                },
                "context_code": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "comments": {
                    "type": "text",
                    "nullable": true
                },
                "migration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "content_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "tag_type": {
                    "type": "\"canvas\".\"content_tags__tag_type\"",
                    "nullable": false
                },
                "context_module_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "learning_outcome_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "mastery_score": {
                    "type": "double precision",
                    "nullable": true
                },
                "rubric_association_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "associated_asset_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "associated_asset_type": {
                    "type": "\"canvas\".\"content_tags__associated_asset_type\"",
                    "nullable": true
                },
                "link_settings": {
                    "type": "text",
                    "nullable": true
                },
                "new_tab": {
                    "type": "boolean",
                    "nullable": true
                },
                "position": {
                    "type": "integer",
                    "nullable": true
                },
                "content_type": {
                    "type": "\"canvas\".\"content_tags__content_type\"",
                    "nullable": true
                },
                "url": {
                    "type": "text",
                    "nullable": true
                },
                "title": {
                    "type": "text",
                    "nullable": true
                }
            }
        },
        "canvas.context_external_tools": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "developer_key_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"context_external_tools__workflow_state\"",
                    "nullable": false
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "context_type": {
                    "type": "\"canvas\".\"context_external_tools__context_type\"",
                    "nullable": true
                },
                "migration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "consumer_key": {
                    "type": "text",
                    "nullable": false
                },
                "cloned_item_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "tool_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "not_selectable": {
                    "type": "boolean",
                    "nullable": true
                },
                "app_center_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "allow_membership_service_access": {
                    "type": "boolean",
                    "nullable": false
                },
                "description": {
                    "type": "text",
                    "nullable": true
                },
                "name": {
                    "type": "varchar(255)",
                    "nullable": false
                },
                "domain": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "url": {
                    "type": "varchar(4096)",
                    "nullable": true
                },
                "settings": {
                    "type": "\"canvas\".\"Annotated\"",
                    "nullable": true
                }
            }
        },
        "canvas.context_module_progressions": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"context_module_progressions__workflow_state\"",
                    "nullable": false
                },
                "requirements_met": {
                    "type": "text",
                    "nullable": true
                },
                "collapsed": {
                    "type": "boolean",
                    "nullable": true
                },
                "current_position": {
                    "type": "integer",
                    "nullable": true
                },
                "completed_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "current": {
                    "type": "boolean",
                    "nullable": true
                },
                "evaluated_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "incomplete_requirements": {
                    "type": "text",
                    "nullable": true
                },
                "context_module_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "lock_version": {
                    "type": "integer",
                    "nullable": false
                }
            }
        },
        "canvas.context_modules": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "name": {
                    "type": "text",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"context_modules__workflow_state\"",
                    "nullable": false
                },
                "unlock_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "context_type": {
                    "type": "\"canvas\".\"context_modules__context_type\"",
                    "nullable": false
                },
                "migration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "prerequisites": {
                    "type": "text",
                    "nullable": true
                },
                "completion_requirements": {
                    "type": "text",
                    "nullable": true
                },
                "require_sequential_progress": {
                    "type": "boolean",
                    "nullable": true
                },
                "completion_events": {
                    "type": "text",
                    "nullable": true
                },
                "requirement_count": {
                    "type": "integer",
                    "nullable": true
                },
                "position": {
                    "type": "integer",
                    "nullable": true
                }
            }
        },
        "canvas.conversation_message_participants": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "workflow_state": {
                    "type": "\"canvas\".\"conversation_message_participants__workflow_state\"",
                    "nullable": true
                },
                "conversation_message_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "conversation_participant_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "tags": {
                    "type": "text",
                    "nullable": true
                }
            }
        },
        "canvas.conversation_messages": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "context_type": {
                    "type": "\"canvas\".\"conversation_messages__context_type\"",
                    "nullable": true
                },
                "conversation_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "author_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "generated": {
                    "type": "boolean",
                    "nullable": true
                },
                "forwarded_message_ids": {
                    "type": "text",
                    "nullable": true
                },
                "media_comment_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "media_comment_type": {
                    "type": "\"canvas\".\"conversation_messages__media_comment_type\"",
                    "nullable": true
                },
                "asset_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "asset_type": {
                    "type": "\"canvas\".\"conversation_messages__asset_type\"",
                    "nullable": true
                },
                "attachment_ids": {
                    "type": "text",
                    "nullable": true
                },
                "has_attachments": {
                    "type": "boolean",
                    "nullable": true
                },
                "has_media_objects": {
                    "type": "boolean",
                    "nullable": true
                },
                "body": {
                    "type": "text",
                    "nullable": true
                }
            }
        },
        "canvas.conversation_participants": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "workflow_state": {
                    "type": "\"canvas\".\"conversation_participants__workflow_state\"",
                    "nullable": false
                },
                "has_attachments": {
                    "type": "boolean",
                    "nullable": false
                },
                "has_media_objects": {
                    "type": "boolean",
                    "nullable": false
                },
                "last_message_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "subscribed": {
                    "type": "boolean",
                    "nullable": false
                },
                "message_count": {
                    "type": "integer",
                    "nullable": false
                },
                "label": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "tags": {
                    "type": "text",
                    "nullable": true
                }
            }
        },
        "canvas.conversations": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "context_type": {
                    "type": "\"canvas\".\"conversations__context_type\"",
                    "nullable": true
                },
                "has_attachments": {
                    "type": "boolean",
                    "nullable": false
                },
                "has_media_objects": {
                    "type": "boolean",
                    "nullable": false
                },
                "subject": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "tags": {
                    "type": "text",
                    "nullable": true
                }
            }
        },
        "canvas.course_account_associations": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "course_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "account_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "course_section_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "depth": {
                    "type": "integer",
                    "nullable": false
                }
            }
        },
        "canvas.course_sections": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "name": {
                    "type": "varchar(255)",
                    "nullable": false
                },
                "course_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "integration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"course_sections__workflow_state\"",
                    "nullable": false
                },
                "sis_batch_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "start_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "end_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "sis_source_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "default_section": {
                    "type": "boolean",
                    "nullable": true
                },
                "accepting_enrollments": {
                    "type": "boolean",
                    "nullable": true
                },
                "restrict_enrollments_to_section_dates": {
                    "type": "boolean",
                    "nullable": true
                },
                "nonxlist_course_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "enrollment_term_id": {
                    "type": "bigint",
                    "nullable": true
                }
            }
        },
        "canvas.courses": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "storage_quota": {
                    "type": "bigint",
                    "nullable": true
                },
                "integration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "lti_context_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "sis_batch_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"courses__workflow_state\"",
                    "nullable": false
                },
                "account_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "grading_standard_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "start_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "sis_source_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "group_weighting_scheme": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "conclude_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "is_public": {
                    "type": "boolean",
                    "nullable": true
                },
                "allow_student_wiki_edits": {
                    "type": "boolean",
                    "nullable": true
                },
                "syllabus_body": {
                    "type": "text",
                    "nullable": true
                },
                "default_wiki_editing_roles": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "wiki_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "allow_student_organized_groups": {
                    "type": "boolean",
                    "nullable": false
                },
                "course_code": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "default_view": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "abstract_course_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "enrollment_term_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "open_enrollment": {
                    "type": "boolean",
                    "nullable": true
                },
                "tab_configuration": {
                    "type": "text",
                    "nullable": true
                },
                "turnitin_comments": {
                    "type": "text",
                    "nullable": true
                },
                "self_enrollment": {
                    "type": "boolean",
                    "nullable": true
                },
                "license": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "indexed": {
                    "type": "boolean",
                    "nullable": true
                },
                "restrict_enrollments_to_course_dates": {
                    "type": "boolean",
                    "nullable": true
                },
                "template_course_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "replacement_course_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "public_description": {
                    "type": "text",
                    "nullable": true
                },
                "self_enrollment_code": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "self_enrollment_limit": {
                    "type": "integer",
                    "nullable": true
                },
                "turnitin_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "show_announcements_on_home_page": {
                    "type": "boolean",
                    "nullable": true
                },
                "home_page_announcement_limit": {
                    "type": "integer",
                    "nullable": true
                },
                "latest_outcome_import_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "grade_passback_setting": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "template": {
                    "type": "boolean",
                    "nullable": false
                },
                "homeroom_course": {
                    "type": "boolean",
                    "nullable": false
                },
                "sync_enrollments_from_homeroom": {
                    "type": "boolean",
                    "nullable": false
                },
                "homeroom_course_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "locale": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "name": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "time_zone": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "uuid": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "settings": {
                    "type": "\"canvas\".\"Annotated\"",
                    "nullable": true
                }
            }
        },
        "canvas.custom_gradebook_column_data": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "content": {
                    "type": "varchar(255)",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "custom_gradebook_column_id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.custom_gradebook_columns": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"custom_gradebook_columns__workflow_state\"",
                    "nullable": false
                },
                "course_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "teacher_notes": {
                    "type": "boolean",
                    "nullable": false
                },
                "position": {
                    "type": "integer",
                    "nullable": false
                },
                "read_only": {
                    "type": "boolean",
                    "nullable": false
                },
                "title": {
                    "type": "varchar(255)",
                    "nullable": false
                }
            }
        },
        "canvas.developer_key_account_bindings": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "account_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"developer_key_account_bindings__workflow_state\"",
                    "nullable": false
                },
                "developer_key_id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.developer_keys": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "name": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "scopes": {
                    "type": "text",
                    "nullable": true
                },
                "workflow_state": {
                    "type": "\"canvas\".\"developer_keys__workflow_state\"",
                    "nullable": false
                },
                "account_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "redirect_uri": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "icon_url": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "redirect_uris": {
                    "type": "varchar(255) ARRAY",
                    "nullable": false
                },
                "notes": {
                    "type": "text",
                    "nullable": true
                },
                "access_token_count": {
                    "type": "integer",
                    "nullable": false
                },
                "require_scopes": {
                    "type": "boolean",
                    "nullable": false
                },
                "test_cluster_only": {
                    "type": "boolean",
                    "nullable": false
                },
                "public_jwk": {
                    "type": "text",
                    "nullable": true
                },
                "allow_includes": {
                    "type": "boolean",
                    "nullable": false
                },
                "is_lti_key": {
                    "type": "boolean",
                    "nullable": false
                },
                "client_credentials_audience": {
                    "type": "text",
                    "nullable": true
                },
                "email": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "user_name": {
                    "type": "varchar(255)",
                    "nullable": true
                }
            }
        },
        "canvas.discussion_entries": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "message": {
                    "type": "text",
                    "nullable": true
                },
                "attachment_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"discussion_entries__workflow_state\"",
                    "nullable": false
                },
                "migration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "discussion_topic_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "parent_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "editor_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "root_entry_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "depth": {
                    "type": "integer",
                    "nullable": true
                },
                "rating_count": {
                    "type": "integer",
                    "nullable": true
                },
                "rating_sum": {
                    "type": "integer",
                    "nullable": true
                }
            }
        },
        "canvas.discussion_entry_participants": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"discussion_entry_participants__workflow_state\"",
                    "nullable": false
                },
                "forced_read_state": {
                    "type": "boolean",
                    "nullable": true
                },
                "discussion_entry_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "rating": {
                    "type": "integer",
                    "nullable": true
                }
            }
        },
        "canvas.discussion_topic_participants": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"discussion_topic_participants__workflow_state\"",
                    "nullable": false
                },
                "subscribed": {
                    "type": "boolean",
                    "nullable": true
                },
                "unread_entry_count": {
                    "type": "integer",
                    "nullable": false
                },
                "discussion_topic_id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.discussion_topics": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "message": {
                    "type": "text",
                    "nullable": true
                },
                "type": {
                    "type": "\"canvas\".\"discussion_topics__type\"",
                    "nullable": true
                },
                "attachment_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"discussion_topics__workflow_state\"",
                    "nullable": false
                },
                "lock_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "context_type": {
                    "type": "\"canvas\".\"discussion_topics__context_type\"",
                    "nullable": false
                },
                "locked": {
                    "type": "boolean",
                    "nullable": false
                },
                "assignment_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "migration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "group_category_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "cloned_item_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "last_reply_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "delayed_post_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "posted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "root_topic_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "old_assignment_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "subtopics_refreshed_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "external_feed_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "podcast_enabled": {
                    "type": "boolean",
                    "nullable": false
                },
                "podcast_has_student_posts": {
                    "type": "boolean",
                    "nullable": false
                },
                "require_initial_post": {
                    "type": "boolean",
                    "nullable": false
                },
                "editor_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "discussion_type": {
                    "type": "\"canvas\".\"discussion_topics__discussion_type\"",
                    "nullable": true
                },
                "pinned": {
                    "type": "boolean",
                    "nullable": false
                },
                "allow_rating": {
                    "type": "boolean",
                    "nullable": false
                },
                "only_graders_can_rate": {
                    "type": "boolean",
                    "nullable": false
                },
                "sort_by_rating": {
                    "type": "boolean",
                    "nullable": false
                },
                "todo_date": {
                    "type": "timestamp",
                    "nullable": true
                },
                "is_section_specific": {
                    "type": "boolean",
                    "nullable": false
                },
                "position": {
                    "type": "integer",
                    "nullable": true
                },
                "title": {
                    "type": "varchar(255)",
                    "nullable": true
                }
            }
        },
        "canvas.enrollment_dates_overrides": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "context_type": {
                    "type": "\"canvas\".\"enrollment_dates_overrides__context_type\"",
                    "nullable": false
                },
                "start_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "end_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "enrollment_term_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "enrollment_type": {
                    "type": "\"canvas\".\"enrollment_dates_overrides__enrollment_type\"",
                    "nullable": true
                }
            }
        },
        "canvas.enrollment_states": {
            "keys": {
                "primary": "enrollment_id"
            },
            "properties": {
                "enrollment_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "state_is_current": {
                    "type": "boolean",
                    "nullable": false
                },
                "state_started_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "state_valid_until": {
                    "type": "timestamp",
                    "nullable": true
                },
                "restricted_access": {
                    "type": "boolean",
                    "nullable": false
                },
                "access_is_current": {
                    "type": "boolean",
                    "nullable": false
                },
                "state": {
                    "type": "\"canvas\".\"enrollment_states__state\"",
                    "nullable": true
                }
            }
        },
        "canvas.enrollment_terms": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "name": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "integration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"enrollment_terms__workflow_state\"",
                    "nullable": false
                },
                "sis_batch_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "start_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "end_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "sis_source_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "term_code": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "grading_period_group_id": {
                    "type": "bigint",
                    "nullable": true
                }
            }
        },
        "canvas.enrollments": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "sis_batch_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"enrollments__workflow_state\"",
                    "nullable": false
                },
                "role_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "start_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "end_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "course_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "completed_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "course_section_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "grade_publishing_status": {
                    "type": "varchar(255)",
                    "nullable": false
                },
                "associated_user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "self_enrolled": {
                    "type": "boolean",
                    "nullable": true
                },
                "limit_privileges_to_course_section": {
                    "type": "boolean",
                    "nullable": false
                },
                "last_activity_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "total_activity_time": {
                    "type": "integer",
                    "nullable": true
                },
                "sis_pseudonym_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "last_attended_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "type": {
                    "type": "\"canvas\".\"enrollments__type\"",
                    "nullable": false
                }
            }
        },
        "canvas.eportfolios": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.epub_exports": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.external_feeds": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.favorites": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "context_type": {
                    "type": "\"canvas\".\"favorites__context_type\"",
                    "nullable": false
                }
            }
        },
        "canvas.feature_flags": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "context_type": {
                    "type": "\"canvas\".\"feature_flags__context_type\"",
                    "nullable": false
                },
                "feature": {
                    "type": "varchar(255)",
                    "nullable": false
                },
                "state": {
                    "type": "varchar(255)",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                }
            }
        },
        "canvas.folders": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "name": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "full_name": {
                    "type": "text",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"folders__workflow_state\"",
                    "nullable": false
                },
                "unlock_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "lock_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "context_type": {
                    "type": "\"canvas\".\"folders__context_type\"",
                    "nullable": false
                },
                "locked": {
                    "type": "boolean",
                    "nullable": true
                },
                "cloned_item_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "submission_context_code": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "parent_folder_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "unique_type": {
                    "type": "\"canvas\".\"folders__unique_type\"",
                    "nullable": true
                },
                "position": {
                    "type": "integer",
                    "nullable": true
                }
            }
        },
        "canvas.gradebook_uploads": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.grading_period_groups": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "account_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"grading_period_groups__workflow_state\"",
                    "nullable": false
                },
                "course_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "weighted": {
                    "type": "boolean",
                    "nullable": true
                },
                "display_totals_for_all_grading_periods": {
                    "type": "boolean",
                    "nullable": false
                },
                "title": {
                    "type": "varchar(255)",
                    "nullable": true
                }
            }
        },
        "canvas.grading_periods": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"grading_periods__workflow_state\"",
                    "nullable": false
                },
                "grading_period_group_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "start_date": {
                    "type": "timestamp",
                    "nullable": false
                },
                "end_date": {
                    "type": "timestamp",
                    "nullable": false
                },
                "close_date": {
                    "type": "timestamp",
                    "nullable": true
                },
                "title": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "weight": {
                    "type": "double precision",
                    "nullable": true
                }
            }
        },
        "canvas.grading_standards": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "version": {
                    "type": "integer",
                    "nullable": true
                },
                "context_code": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"grading_standards__workflow_state\"",
                    "nullable": false
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "context_type": {
                    "type": "\"canvas\".\"grading_standards__context_type\"",
                    "nullable": false
                },
                "migration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "title": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "data": {
                    "type": "text",
                    "nullable": true
                }
            }
        },
        "canvas.group_and_membership_importers": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.group_categories": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "name": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "sis_batch_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "context_type": {
                    "type": "\"canvas\".\"group_categories__context_type\"",
                    "nullable": false
                },
                "sis_source_id": {
                    "type": "text",
                    "nullable": true
                },
                "role": {
                    "type": "\"canvas\".\"group_categories__role\"",
                    "nullable": true
                },
                "self_signup": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "group_limit": {
                    "type": "integer",
                    "nullable": true
                },
                "auto_leader": {
                    "type": "varchar(255)",
                    "nullable": true
                }
            }
        },
        "canvas.group_memberships": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"group_memberships__workflow_state\"",
                    "nullable": false
                },
                "sis_batch_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "group_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "moderator": {
                    "type": "boolean",
                    "nullable": true
                },
                "uuid": {
                    "type": "varchar(255)",
                    "nullable": false
                }
            }
        },
        "canvas.groups": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "name": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "storage_quota": {
                    "type": "bigint",
                    "nullable": true
                },
                "lti_context_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"groups__workflow_state\"",
                    "nullable": false
                },
                "account_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "sis_batch_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "context_type": {
                    "type": "\"canvas\".\"groups__context_type\"",
                    "nullable": false
                },
                "migration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "group_category_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "sis_source_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "is_public": {
                    "type": "boolean",
                    "nullable": true
                },
                "wiki_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "max_membership": {
                    "type": "integer",
                    "nullable": true
                },
                "join_level": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "avatar_attachment_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "leader_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "description": {
                    "type": "text",
                    "nullable": true
                },
                "uuid": {
                    "type": "varchar(255)",
                    "nullable": false
                },
                "default_view": {
                    "type": "\"canvas\".\"groups__default_view\"",
                    "nullable": true
                }
            }
        },
        "canvas.late_policies": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "course_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "missing_submission_deduction_enabled": {
                    "type": "boolean",
                    "nullable": false
                },
                "missing_submission_deduction": {
                    "type": "decimal(5, 2)",
                    "nullable": false
                },
                "late_submission_deduction_enabled": {
                    "type": "boolean",
                    "nullable": false
                },
                "late_submission_deduction": {
                    "type": "decimal(5, 2)",
                    "nullable": false
                },
                "late_submission_interval": {
                    "type": "varchar(16)",
                    "nullable": false
                },
                "late_submission_minimum_percent_enabled": {
                    "type": "boolean",
                    "nullable": false
                },
                "late_submission_minimum_percent": {
                    "type": "decimal(5, 2)",
                    "nullable": false
                }
            }
        },
        "canvas.learning_outcome_groups": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"learning_outcome_groups__workflow_state\"",
                    "nullable": false
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "context_type": {
                    "type": "\"canvas\".\"learning_outcome_groups__context_type\"",
                    "nullable": true
                },
                "migration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "learning_outcome_group_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "root_learning_outcome_group_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "vendor_guid": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "outcome_import_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "source_outcome_group_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "description": {
                    "type": "text",
                    "nullable": true
                },
                "title": {
                    "type": "varchar(255)",
                    "nullable": false
                }
            }
        },
        "canvas.learning_outcome_question_results": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "learning_outcome_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "associated_asset_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "associated_asset_type": {
                    "type": "\"canvas\".\"learning_outcome_question_results__associated_asset_type\"",
                    "nullable": false
                },
                "learning_outcome_result_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "score": {
                    "type": "double precision",
                    "nullable": true
                },
                "possible": {
                    "type": "double precision",
                    "nullable": true
                },
                "mastery": {
                    "type": "boolean",
                    "nullable": true
                },
                "attempt": {
                    "type": "integer",
                    "nullable": true
                },
                "original_score": {
                    "type": "double precision",
                    "nullable": true
                },
                "original_possible": {
                    "type": "double precision",
                    "nullable": true
                },
                "original_mastery": {
                    "type": "boolean",
                    "nullable": true
                },
                "assessed_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "submitted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "percent": {
                    "type": "double precision",
                    "nullable": true
                },
                "title": {
                    "type": "text",
                    "nullable": true
                }
            }
        },
        "canvas.learning_outcome_results": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"learning_outcome_results__workflow_state\"",
                    "nullable": false
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "context_type": {
                    "type": "\"canvas\".\"learning_outcome_results__context_type\"",
                    "nullable": true
                },
                "context_code": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "learning_outcome_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "associated_asset_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "associated_asset_type": {
                    "type": "\"canvas\".\"learning_outcome_results__associated_asset_type\"",
                    "nullable": true
                },
                "score": {
                    "type": "double precision",
                    "nullable": true
                },
                "possible": {
                    "type": "double precision",
                    "nullable": true
                },
                "mastery": {
                    "type": "boolean",
                    "nullable": true
                },
                "attempt": {
                    "type": "integer",
                    "nullable": true
                },
                "original_score": {
                    "type": "double precision",
                    "nullable": true
                },
                "original_possible": {
                    "type": "double precision",
                    "nullable": true
                },
                "original_mastery": {
                    "type": "boolean",
                    "nullable": true
                },
                "assessed_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "submitted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "association_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "association_type": {
                    "type": "\"canvas\".\"learning_outcome_results__association_type\"",
                    "nullable": true
                },
                "content_tag_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "user_uuid": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "artifact_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "artifact_type": {
                    "type": "\"canvas\".\"learning_outcome_results__artifact_type\"",
                    "nullable": true
                },
                "hide_points": {
                    "type": "boolean",
                    "nullable": false
                },
                "hidden": {
                    "type": "boolean",
                    "nullable": false
                },
                "percent": {
                    "type": "double precision",
                    "nullable": true
                },
                "title": {
                    "type": "varchar(255)",
                    "nullable": true
                }
            }
        },
        "canvas.learning_outcomes": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "display_name": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "context_code": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"learning_outcomes__workflow_state\"",
                    "nullable": false
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "context_type": {
                    "type": "\"canvas\".\"learning_outcomes__context_type\"",
                    "nullable": true
                },
                "migration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "vendor_guid": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "outcome_import_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "calculation_method": {
                    "type": "\"canvas\".\"learning_outcomes__calculation_method\"",
                    "nullable": true
                },
                "calculation_int": {
                    "type": "smallint",
                    "nullable": true
                },
                "short_description": {
                    "type": "varchar(255)",
                    "nullable": false
                },
                "description": {
                    "type": "text",
                    "nullable": true
                },
                "data": {
                    "type": "text",
                    "nullable": true
                }
            }
        },
        "canvas.live_assessments_assessments": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.live_assessments_submissions": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.lti_line_items": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"lti_line_items__workflow_state\"",
                    "nullable": false
                },
                "assignment_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "client_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "coupled": {
                    "type": "boolean",
                    "nullable": false
                },
                "score_maximum": {
                    "type": "double precision",
                    "nullable": false
                },
                "resource_id": {
                    "type": "text",
                    "nullable": true
                },
                "lti_resource_link_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "label": {
                    "type": "text",
                    "nullable": false
                },
                "extensions": {
                    "type": "text",
                    "nullable": false
                },
                "tag": {
                    "type": "text",
                    "nullable": true
                }
            }
        },
        "canvas.lti_message_handlers": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.lti_resource_links": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"lti_resource_links__workflow_state\"",
                    "nullable": false
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "context_type": {
                    "type": "\"canvas\".\"lti_resource_links__context_type\"",
                    "nullable": false
                },
                "context_external_tool_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "custom": {
                    "type": "text",
                    "nullable": true
                },
                "resource_link_uuid": {
                    "type": "uuid",
                    "nullable": false
                },
                "lookup_uuid": {
                    "type": "uuid",
                    "nullable": false
                }
            }
        },
        "canvas.lti_results": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "extensions": {
                    "type": "text",
                    "nullable": false
                },
                "comment": {
                    "type": "text",
                    "nullable": true
                },
                "submission_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"lti_results__workflow_state\"",
                    "nullable": false
                },
                "result_score": {
                    "type": "double precision",
                    "nullable": true
                },
                "result_maximum": {
                    "type": "double precision",
                    "nullable": true
                },
                "activity_progress": {
                    "type": "text",
                    "nullable": true
                },
                "grading_progress": {
                    "type": "text",
                    "nullable": true
                },
                "lti_line_item_id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.master_courses_child_content_tags": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "child_subscription_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "content_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "migration_id": {
                    "type": "text",
                    "nullable": true
                },
                "downstream_changes": {
                    "type": "text",
                    "nullable": true
                },
                "content_type": {
                    "type": "\"canvas\".\"master_courses_child_content_tags__content_type\"",
                    "nullable": false
                }
            }
        },
        "canvas.master_courses_child_subscriptions": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"master_courses_child_subscriptions__workflow_state\"",
                    "nullable": false
                },
                "use_selective_copy": {
                    "type": "boolean",
                    "nullable": false
                },
                "master_template_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "child_course_id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.master_courses_master_content_tags": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "content_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "migration_id": {
                    "type": "text",
                    "nullable": true
                },
                "restrictions": {
                    "type": "text",
                    "nullable": true
                },
                "use_default_restrictions": {
                    "type": "boolean",
                    "nullable": false
                },
                "master_template_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "content_type": {
                    "type": "\"canvas\".\"master_courses_master_content_tags__content_type\"",
                    "nullable": false
                }
            }
        },
        "canvas.master_courses_master_migrations": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "comment": {
                    "type": "text",
                    "nullable": true
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"master_courses_master_migrations__workflow_state\"",
                    "nullable": false
                },
                "migration_settings": {
                    "type": "text",
                    "nullable": true
                },
                "export_results": {
                    "type": "text",
                    "nullable": true
                },
                "exports_started_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "imports_queued_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "imports_completed_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "send_notification": {
                    "type": "boolean",
                    "nullable": false
                },
                "master_template_id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.master_courses_master_templates": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "course_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"master_courses_master_templates__workflow_state\"",
                    "nullable": true
                },
                "full_course": {
                    "type": "boolean",
                    "nullable": false
                },
                "active_migration_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "default_restrictions": {
                    "type": "text",
                    "nullable": true
                },
                "use_default_restrictions_by_type": {
                    "type": "boolean",
                    "nullable": false
                },
                "default_restrictions_by_type": {
                    "type": "text",
                    "nullable": true
                }
            }
        },
        "canvas.master_courses_migration_results": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "state": {
                    "type": "\"canvas\".\"master_courses_migration_results__state\"",
                    "nullable": false
                },
                "child_subscription_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "master_migration_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "content_migration_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "import_type": {
                    "type": "\"canvas\".\"master_courses_migration_results__import_type\"",
                    "nullable": false
                },
                "results": {
                    "type": "text",
                    "nullable": true
                }
            }
        },
        "canvas.media_objects": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.moderated_grading_provisional_grades": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.originality_reports": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "error_message": {
                    "type": "text",
                    "nullable": true
                },
                "attachment_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "submission_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"originality_reports__workflow_state\"",
                    "nullable": false
                },
                "originality_score": {
                    "type": "double precision",
                    "nullable": true
                },
                "originality_report_url": {
                    "type": "text",
                    "nullable": true
                },
                "originality_report_lti_url": {
                    "type": "text",
                    "nullable": true
                },
                "link_id": {
                    "type": "text",
                    "nullable": true
                },
                "submission_time": {
                    "type": "timestamp",
                    "nullable": true
                }
            }
        },
        "canvas.outcome_imports": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.outcome_proficiencies": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"outcome_proficiencies__workflow_state\"",
                    "nullable": false
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "context_type": {
                    "type": "\"canvas\".\"outcome_proficiencies__context_type\"",
                    "nullable": false
                }
            }
        },
        "canvas.outcome_proficiency_ratings": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"outcome_proficiency_ratings__workflow_state\"",
                    "nullable": false
                },
                "mastery": {
                    "type": "boolean",
                    "nullable": false
                },
                "points": {
                    "type": "double precision",
                    "nullable": false
                },
                "outcome_proficiency_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "color": {
                    "type": "text",
                    "nullable": false
                },
                "description": {
                    "type": "varchar(255)",
                    "nullable": false
                }
            }
        },
        "canvas.post_policies": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "course_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "assignment_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "post_manually": {
                    "type": "boolean",
                    "nullable": false
                }
            }
        },
        "canvas.pseudonyms": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "integration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"pseudonyms__workflow_state\"",
                    "nullable": false
                },
                "account_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "sis_batch_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "unique_id": {
                    "type": "varchar(255)",
                    "nullable": false
                },
                "login_count": {
                    "type": "integer",
                    "nullable": false
                },
                "failed_login_count": {
                    "type": "integer",
                    "nullable": false
                },
                "last_request_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "last_login_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "current_login_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "last_login_ip": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "current_login_ip": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "sis_user_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "authentication_provider_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "position": {
                    "type": "integer",
                    "nullable": true
                }
            }
        },
        "canvas.purgatories": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.quiz_groups": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "name": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "assessment_question_bank_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "quiz_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "migration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "pick_count": {
                    "type": "integer",
                    "nullable": true
                },
                "question_points": {
                    "type": "double precision",
                    "nullable": true
                },
                "position": {
                    "type": "integer",
                    "nullable": true
                }
            }
        },
        "canvas.quiz_questions": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "workflow_state": {
                    "type": "\"canvas\".\"quiz_questions__workflow_state\"",
                    "nullable": true
                },
                "quiz_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "migration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "quiz_group_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "assessment_question_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "assessment_question_version": {
                    "type": "integer",
                    "nullable": true
                },
                "position": {
                    "type": "integer",
                    "nullable": true
                },
                "question_data": {
                    "type": "\"canvas\".\"Annotated\"",
                    "nullable": true
                }
            }
        },
        "canvas.quiz_statistics": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.quiz_submissions": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "submission_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"quiz_submissions__workflow_state\"",
                    "nullable": false
                },
                "quiz_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "quiz_version": {
                    "type": "integer",
                    "nullable": true
                },
                "started_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "finished_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "end_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "score": {
                    "type": "double precision",
                    "nullable": true
                },
                "attempt": {
                    "type": "integer",
                    "nullable": true
                },
                "submission_data": {
                    "type": "text",
                    "nullable": true
                },
                "kept_score": {
                    "type": "double precision",
                    "nullable": true
                },
                "fudge_points": {
                    "type": "double precision",
                    "nullable": false
                },
                "quiz_points_possible": {
                    "type": "double precision",
                    "nullable": true
                },
                "extra_attempts": {
                    "type": "integer",
                    "nullable": true
                },
                "temporary_user_code": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "extra_time": {
                    "type": "integer",
                    "nullable": true
                },
                "manually_scored": {
                    "type": "boolean",
                    "nullable": true
                },
                "manually_unlocked": {
                    "type": "boolean",
                    "nullable": true
                },
                "was_preview": {
                    "type": "boolean",
                    "nullable": true
                },
                "score_before_regrade": {
                    "type": "double precision",
                    "nullable": true
                },
                "has_seen_results": {
                    "type": "boolean",
                    "nullable": true
                }
            }
        },
        "canvas.quizzes": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"quizzes__workflow_state\"",
                    "nullable": false
                },
                "due_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "unlock_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "lock_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "points_possible": {
                    "type": "double precision",
                    "nullable": true
                },
                "assignment_group_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "context_type": {
                    "type": "\"canvas\".\"quizzes__context_type\"",
                    "nullable": false
                },
                "assignment_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "could_be_locked": {
                    "type": "boolean",
                    "nullable": false
                },
                "migration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "only_visible_to_overrides": {
                    "type": "boolean",
                    "nullable": false
                },
                "allowed_attempts": {
                    "type": "integer",
                    "nullable": true
                },
                "published_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "shuffle_answers": {
                    "type": "boolean",
                    "nullable": false
                },
                "show_correct_answers": {
                    "type": "boolean",
                    "nullable": false
                },
                "time_limit": {
                    "type": "integer",
                    "nullable": true
                },
                "scoring_policy": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "quiz_type": {
                    "type": "\"canvas\".\"quizzes__quiz_type\"",
                    "nullable": true
                },
                "access_code": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "question_count": {
                    "type": "integer",
                    "nullable": true
                },
                "anonymous_submissions": {
                    "type": "boolean",
                    "nullable": false
                },
                "hide_results": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "ip_filter": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "require_lockdown_browser": {
                    "type": "boolean",
                    "nullable": false
                },
                "require_lockdown_browser_for_results": {
                    "type": "boolean",
                    "nullable": false
                },
                "one_question_at_a_time": {
                    "type": "boolean",
                    "nullable": false
                },
                "cant_go_back": {
                    "type": "boolean",
                    "nullable": false
                },
                "show_correct_answers_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "hide_correct_answers_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "require_lockdown_browser_monitor": {
                    "type": "boolean",
                    "nullable": false
                },
                "one_time_results": {
                    "type": "boolean",
                    "nullable": false
                },
                "show_correct_answers_last_attempt": {
                    "type": "boolean",
                    "nullable": false
                },
                "unpublished_question_count": {
                    "type": "integer",
                    "nullable": false
                },
                "description": {
                    "type": "text",
                    "nullable": true
                },
                "title": {
                    "type": "varchar(255)",
                    "nullable": true
                }
            }
        },
        "canvas.role_overrides": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "permission": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "role_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "context_type": {
                    "type": "\"canvas\".\"role_overrides__context_type\"",
                    "nullable": false
                },
                "locked": {
                    "type": "boolean",
                    "nullable": false
                },
                "enabled": {
                    "type": "boolean",
                    "nullable": false
                },
                "applies_to_self": {
                    "type": "boolean",
                    "nullable": false
                },
                "applies_to_descendants": {
                    "type": "boolean",
                    "nullable": false
                }
            }
        },
        "canvas.roles": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "name": {
                    "type": "varchar(255)",
                    "nullable": false
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"roles__workflow_state\"",
                    "nullable": false
                },
                "account_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "base_role_type": {
                    "type": "\"canvas\".\"roles__base_role_type\"",
                    "nullable": false
                }
            }
        },
        "canvas.rubric_assessments": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "rubric_association_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "artifact_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "artifact_type": {
                    "type": "\"canvas\".\"rubric_assessments__artifact_type\"",
                    "nullable": false
                },
                "hide_points": {
                    "type": "boolean",
                    "nullable": false
                },
                "score": {
                    "type": "double precision",
                    "nullable": true
                },
                "rubric_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "assessment_type": {
                    "type": "\"canvas\".\"rubric_assessments__assessment_type\"",
                    "nullable": false
                },
                "assessor_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "artifact_attempt": {
                    "type": "integer",
                    "nullable": true
                },
                "data": {
                    "type": "text",
                    "nullable": true
                }
            }
        },
        "canvas.rubric_associations": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "purpose": {
                    "type": "varchar(255)",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"rubric_associations__workflow_state\"",
                    "nullable": false
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "context_type": {
                    "type": "\"canvas\".\"rubric_associations__context_type\"",
                    "nullable": false
                },
                "association_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "association_type": {
                    "type": "\"canvas\".\"rubric_associations__association_type\"",
                    "nullable": false
                },
                "hide_points": {
                    "type": "boolean",
                    "nullable": false
                },
                "rubric_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "use_for_grading": {
                    "type": "boolean",
                    "nullable": true
                },
                "summary_data": {
                    "type": "text",
                    "nullable": true
                },
                "hide_score_total": {
                    "type": "boolean",
                    "nullable": true
                },
                "bookmarked": {
                    "type": "boolean",
                    "nullable": false
                },
                "hide_outcome_results": {
                    "type": "boolean",
                    "nullable": false
                },
                "title": {
                    "type": "varchar(255)",
                    "nullable": true
                }
            }
        },
        "canvas.rubrics": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"rubrics__workflow_state\"",
                    "nullable": false
                },
                "points_possible": {
                    "type": "double precision",
                    "nullable": true
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "context_type": {
                    "type": "\"canvas\".\"rubrics__context_type\"",
                    "nullable": false
                },
                "migration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "hide_score_total": {
                    "type": "boolean",
                    "nullable": true
                },
                "association_count": {
                    "type": "integer",
                    "nullable": false
                },
                "free_form_criterion_comments": {
                    "type": "boolean",
                    "nullable": true
                },
                "title": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "data": {
                    "type": "text",
                    "nullable": true
                }
            }
        },
        "canvas.score_statistics": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "assignment_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "mean": {
                    "type": "double precision",
                    "nullable": false
                },
                "count": {
                    "type": "integer",
                    "nullable": false
                },
                "minimum": {
                    "type": "double precision",
                    "nullable": false
                },
                "maximum": {
                    "type": "double precision",
                    "nullable": false
                }
            }
        },
        "canvas.scores": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "workflow_state": {
                    "type": "\"canvas\".\"scores__workflow_state\"",
                    "nullable": false
                },
                "assignment_group_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "enrollment_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "grading_period_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "current_score": {
                    "type": "double precision",
                    "nullable": true
                },
                "final_score": {
                    "type": "double precision",
                    "nullable": true
                },
                "course_score": {
                    "type": "boolean",
                    "nullable": false
                },
                "unposted_current_score": {
                    "type": "double precision",
                    "nullable": true
                },
                "unposted_final_score": {
                    "type": "double precision",
                    "nullable": true
                },
                "current_points": {
                    "type": "double precision",
                    "nullable": true
                },
                "unposted_current_points": {
                    "type": "double precision",
                    "nullable": true
                },
                "final_points": {
                    "type": "double precision",
                    "nullable": true
                },
                "unposted_final_points": {
                    "type": "double precision",
                    "nullable": true
                },
                "override_score": {
                    "type": "double precision",
                    "nullable": true
                }
            }
        },
        "canvas.sis_batches": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.submission_comments": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "comment": {
                    "type": "text",
                    "nullable": true
                },
                "submission_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "context_type": {
                    "type": "\"canvas\".\"submission_comments__context_type\"",
                    "nullable": false
                },
                "author_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "media_comment_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "media_comment_type": {
                    "type": "\"canvas\".\"submission_comments__media_comment_type\"",
                    "nullable": true
                },
                "attachment_ids": {
                    "type": "text",
                    "nullable": true
                },
                "attempt": {
                    "type": "integer",
                    "nullable": true
                },
                "hidden": {
                    "type": "boolean",
                    "nullable": false
                },
                "author_name": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "group_comment_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "assessment_request_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "anonymous": {
                    "type": "boolean",
                    "nullable": true
                },
                "teacher_only_comment": {
                    "type": "boolean",
                    "nullable": false
                },
                "provisional_grade_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "draft": {
                    "type": "boolean",
                    "nullable": false
                },
                "edited_at": {
                    "type": "timestamp",
                    "nullable": true
                }
            }
        },
        "canvas.submission_versions": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "context_type": {
                    "type": "\"canvas\".\"submission_versions__context_type\"",
                    "nullable": false
                },
                "assignment_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "version_id": {
                    "type": "bigint",
                    "nullable": true
                }
            }
        },
        "canvas.submissions": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "attachment_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "course_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "workflow_state": {
                    "type": "\"canvas\".\"submissions__workflow_state\"",
                    "nullable": false
                },
                "assignment_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "media_comment_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "media_comment_type": {
                    "type": "\"canvas\".\"submissions__media_comment_type\"",
                    "nullable": true
                },
                "attachment_ids": {
                    "type": "text",
                    "nullable": true
                },
                "posted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "group_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "score": {
                    "type": "double precision",
                    "nullable": true
                },
                "attempt": {
                    "type": "integer",
                    "nullable": true
                },
                "submitted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "quiz_submission_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "extra_attempts": {
                    "type": "integer",
                    "nullable": true
                },
                "grading_period_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "grade": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "submission_type": {
                    "type": "\"canvas\".\"submissions__submission_type\"",
                    "nullable": true
                },
                "processed": {
                    "type": "boolean",
                    "nullable": true
                },
                "grade_matches_current_submission": {
                    "type": "boolean",
                    "nullable": true
                },
                "published_score": {
                    "type": "double precision",
                    "nullable": true
                },
                "published_grade": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "graded_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "student_entered_score": {
                    "type": "double precision",
                    "nullable": true
                },
                "grader_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "submission_comments_count": {
                    "type": "integer",
                    "nullable": true
                },
                "media_object_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "turnitin_data": {
                    "type": "text",
                    "nullable": true
                },
                "cached_due_date": {
                    "type": "timestamp",
                    "nullable": true
                },
                "excused": {
                    "type": "boolean",
                    "nullable": true
                },
                "graded_anonymously": {
                    "type": "boolean",
                    "nullable": true
                },
                "late_policy_status": {
                    "type": "varchar(16)",
                    "nullable": true
                },
                "points_deducted": {
                    "type": "decimal(6, 2)",
                    "nullable": true
                },
                "seconds_late_override": {
                    "type": "bigint",
                    "nullable": true
                },
                "lti_user_id": {
                    "type": "text",
                    "nullable": true
                },
                "anonymous_id": {
                    "type": "varchar(5)",
                    "nullable": true
                },
                "last_comment_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "cached_quiz_lti": {
                    "type": "boolean",
                    "nullable": false
                },
                "cached_tardiness": {
                    "type": "varchar(16)",
                    "nullable": true
                },
                "resource_link_lookup_uuid": {
                    "type": "uuid",
                    "nullable": true
                },
                "redo_request": {
                    "type": "boolean",
                    "nullable": false
                },
                "body": {
                    "type": "text",
                    "nullable": true
                },
                "url": {
                    "type": "varchar(255)",
                    "nullable": true
                }
            }
        },
        "canvas.usage_rights": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.user_account_associations": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "account_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "depth": {
                    "type": "integer",
                    "nullable": true
                }
            }
        },
        "canvas.users": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "storage_quota": {
                    "type": "bigint",
                    "nullable": true
                },
                "lti_context_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"users__workflow_state\"",
                    "nullable": false
                },
                "sortable_name": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "avatar_image_url": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "avatar_image_source": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "avatar_image_updated_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "short_name": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "last_logged_out": {
                    "type": "timestamp",
                    "nullable": true
                },
                "pronouns": {
                    "type": "text",
                    "nullable": true
                },
                "merged_into_user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "locale": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "name": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "time_zone": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "uuid": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "school_name": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "school_position": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "public": {
                    "type": "boolean",
                    "nullable": true
                }
            }
        },
        "canvas.versions": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                }
            }
        },
        "canvas.web_conference_participants": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "web_conference_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "participation_type": {
                    "type": "\"canvas\".\"web_conference_participants__participation_type\"",
                    "nullable": true
                }
            }
        },
        "canvas.web_conferences": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "context_type": {
                    "type": "\"canvas\".\"web_conferences__context_type\"",
                    "nullable": false
                },
                "start_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "end_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "context_code": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "started_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "user_ids": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "ended_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "recording_ready": {
                    "type": "boolean",
                    "nullable": true
                },
                "conference_type": {
                    "type": "\"canvas\".\"web_conferences__conference_type\"",
                    "nullable": false
                },
                "conference_key": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "description": {
                    "type": "text",
                    "nullable": true
                },
                "duration": {
                    "type": "double precision",
                    "nullable": true
                },
                "settings": {
                    "type": "text",
                    "nullable": true
                },
                "title": {
                    "type": "varchar(255)",
                    "nullable": false
                },
                "uuid": {
                    "type": "varchar(255)",
                    "nullable": true
                }
            }
        },
        "canvas.wiki_pages": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "\"canvas\".\"wiki_pages__workflow_state\"",
                    "nullable": false
                },
                "context_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "context_type": {
                    "type": "\"canvas\".\"wiki_pages__context_type\"",
                    "nullable": false
                },
                "assignment_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "migration_id": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "wiki_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "old_assignment_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "todo_date": {
                    "type": "timestamp",
                    "nullable": true
                },
                "editing_roles": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "revised_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "body": {
                    "type": "text",
                    "nullable": true
                },
                "url": {
                    "type": "text",
                    "nullable": true
                },
                "title": {
                    "type": "varchar(255)",
                    "nullable": true
                },
                "protected_editing": {
                    "type": "boolean",
                    "nullable": false
                },
                "could_be_locked": {
                    "type": "boolean",
                    "nullable": true
                }
            }
        },
        "canvas.wikis": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "front_page_url": {
                    "type": "text",
                    "nullable": true
                },
                "has_no_front_page": {
                    "type": "boolean",
                    "nullable": true
                },
                "title": {
                    "type": "varchar(255)",
                    "nullable": true
                }
            }
        },
        "canvas_logs.web_logs": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "uuid",
                    "nullable": false
                },
                "timestamp": {
                    "type": "timestamp",
                    "nullable": false
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "real_user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "course_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "quiz_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "discussion_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "conversation_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "assignment_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "url": {
                    "type": "text",
                    "nullable": false
                },
                "http_method": {
                    "type": "\"canvas_logs\".\"HTTPMethod\"",
                    "nullable": false
                },
                "http_status": {
                    "type": "\"canvas_logs\".\"HTTPStatus\"",
                    "nullable": false
                },
                "http_version": {
                    "type": "\"canvas_logs\".\"HTTPVersion\"",
                    "nullable": false
                },
                "remote_ip": {
                    "type": "inet",
                    "nullable": false
                },
                "interaction_micros": {
                    "type": "integer",
                    "nullable": false
                },
                "web_application_controller": {
                    "type": "integer",
                    "nullable": true
                },
                "web_application_action": {
                    "type": "integer",
                    "nullable": true
                },
                "web_application_context_type": {
                    "type": "\"canvas_logs\".\"ContextType\"",
                    "nullable": true
                },
                "web_application_context_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "session_id": {
                    "type": "uuid",
                    "nullable": true
                },
                "developer_key_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "participated": {
                    "type": "boolean",
                    "nullable": false
                },
                "user_agent": {
                    "type": "varchar(255)",
                    "nullable": true
                }
            }
        },
        "canvas_logs.Action": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "integer",
                    "nullable": false
                },
                "value": {
                    "type": "varchar(64)",
                    "nullable": false
                }
            }
        },
        "canvas_logs.Controller": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "integer",
                    "nullable": false
                },
                "value": {
                    "type": "varchar(64)",
                    "nullable": false
                }
            }
        },
        "catalog.account_admins": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "integer",
                    "nullable": false
                },
                "canvas_user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "account_id": {
                    "type": "integer",
                    "nullable": true
                },
                "name": {
                    "type": "text",
                    "nullable": true
                },
                "email": {
                    "type": "text",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "root_account_id": {
                    "type": "integer",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                }
            }
        },
        "catalog.accounts": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "integer",
                    "nullable": false
                },
                "parent_id": {
                    "type": "integer",
                    "nullable": true
                },
                "name": {
                    "type": "text",
                    "nullable": true
                },
                "about": {
                    "type": "text",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "portal_path": {
                    "type": "text",
                    "nullable": true
                },
                "canvas_domain": {
                    "type": "text",
                    "nullable": true
                },
                "type": {
                    "type": "text",
                    "nullable": true
                },
                "settings": {
                    "type": "text",
                    "nullable": true
                },
                "canvas_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "locale": {
                    "type": "text",
                    "nullable": false
                },
                "text_overrides": {
                    "type": "text",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "logo_file_name": {
                    "type": "text",
                    "nullable": true
                },
                "logo_content_type": {
                    "type": "text",
                    "nullable": true
                },
                "logo_file_size": {
                    "type": "integer",
                    "nullable": true
                },
                "logo_updated_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "favicon_file_name": {
                    "type": "text",
                    "nullable": true
                },
                "favicon_content_type": {
                    "type": "text",
                    "nullable": true
                },
                "favicon_file_size": {
                    "type": "integer",
                    "nullable": true
                },
                "favicon_updated_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "header_image_file_name": {
                    "type": "text",
                    "nullable": true
                },
                "header_image_content_type": {
                    "type": "text",
                    "nullable": true
                },
                "header_image_file_size": {
                    "type": "integer",
                    "nullable": true
                },
                "header_image_updated_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "canvas_account_uuid": {
                    "type": "text",
                    "nullable": true
                },
                "alias_path": {
                    "type": "text",
                    "nullable": true
                }
            }
        },
        "catalog.applicants": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "integer",
                    "nullable": false
                },
                "product_id": {
                    "type": "integer",
                    "nullable": true
                },
                "name": {
                    "type": "text",
                    "nullable": true
                },
                "email": {
                    "type": "text",
                    "nullable": true
                },
                "canvas_user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "notified_of_opening_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "status": {
                    "type": "text",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "token": {
                    "type": "text",
                    "nullable": true
                },
                "activated": {
                    "type": "boolean",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                }
            }
        },
        "catalog.bulk_checkout_promotions": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "bulk_checkout_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "promotion_id": {
                    "type": "integer",
                    "nullable": true
                },
                "discount": {
                    "type": "decimal",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                }
            }
        },
        "catalog.bulk_checkouts": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "canvas_user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "product_id": {
                    "type": "integer",
                    "nullable": true
                },
                "account_id": {
                    "type": "integer",
                    "nullable": true
                },
                "order_id": {
                    "type": "integer",
                    "nullable": true
                },
                "seats": {
                    "type": "integer",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "checkout_time": {
                    "type": "timestamp",
                    "nullable": true
                }
            }
        },
        "catalog.bulk_invitations": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "order_item_id": {
                    "type": "integer",
                    "nullable": true
                },
                "product_id": {
                    "type": "integer",
                    "nullable": true
                },
                "email": {
                    "type": "text",
                    "nullable": true
                },
                "code": {
                    "type": "text",
                    "nullable": true
                },
                "status": {
                    "type": "text",
                    "nullable": true
                },
                "invited_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "revoked_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "enrollment_id": {
                    "type": "integer",
                    "nullable": true
                }
            }
        },
        "catalog.cart_item_promotions": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "cart_item_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "promotion_id": {
                    "type": "integer",
                    "nullable": true
                },
                "discount": {
                    "type": "decimal",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                }
            }
        },
        "catalog.cart_items": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "cart_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "product_id": {
                    "type": "integer",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                }
            }
        },
        "catalog.carts": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "account_id": {
                    "type": "integer",
                    "nullable": true
                },
                "canvas_user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "order_id": {
                    "type": "integer",
                    "nullable": true
                },
                "checkout_time": {
                    "type": "timestamp",
                    "nullable": true
                },
                "root_account_id": {
                    "type": "integer",
                    "nullable": true
                }
            }
        },
        "catalog.categories": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "integer",
                    "nullable": false
                },
                "account_id": {
                    "type": "integer",
                    "nullable": true
                },
                "group_id": {
                    "type": "integer",
                    "nullable": true
                },
                "group_type": {
                    "type": "text",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                }
            }
        },
        "catalog.certificate_templates": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "integer",
                    "nullable": false
                },
                "account_id": {
                    "type": "integer",
                    "nullable": true
                },
                "name": {
                    "type": "text",
                    "nullable": true
                },
                "template": {
                    "type": "text",
                    "nullable": true
                },
                "pdf_settings": {
                    "type": "text",
                    "nullable": true
                },
                "code": {
                    "type": "text",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                }
            }
        },
        "catalog.certificates": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "integer",
                    "nullable": false
                },
                "product_id": {
                    "type": "integer",
                    "nullable": true
                },
                "name": {
                    "type": "text",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "old_template": {
                    "type": "text",
                    "nullable": true
                },
                "old_pdf_settings": {
                    "type": "text",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "certificate_template_id": {
                    "type": "integer",
                    "nullable": true
                },
                "active": {
                    "type": "boolean",
                    "nullable": false
                },
                "custom_template_id": {
                    "type": "integer",
                    "nullable": true
                },
                "days_to_expire": {
                    "type": "integer",
                    "nullable": true
                },
                "expires_at": {
                    "type": "timestamp",
                    "nullable": true
                }
            }
        },
        "catalog.custom_emails": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "account_id": {
                    "type": "integer",
                    "nullable": false
                },
                "email_type": {
                    "type": "text",
                    "nullable": false
                },
                "draft": {
                    "type": "text",
                    "nullable": true
                },
                "published": {
                    "type": "text",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "created_by": {
                    "type": "text",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_by": {
                    "type": "text",
                    "nullable": false
                },
                "published_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "published_by": {
                    "type": "text",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                }
            }
        },
        "catalog.email_layouts": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "integer",
                    "nullable": false
                },
                "account_id": {
                    "type": "integer",
                    "nullable": true
                },
                "header": {
                    "type": "text",
                    "nullable": true
                },
                "footer": {
                    "type": "text",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                }
            }
        },
        "catalog.enrollments": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "integer",
                    "nullable": false
                },
                "canvas_user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "product_id": {
                    "type": "integer",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "root_program_id": {
                    "type": "integer",
                    "nullable": true
                },
                "requirements_completed_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "ends_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "external_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "status": {
                    "type": "text",
                    "nullable": false
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "last_sync_error": {
                    "type": "text",
                    "nullable": true
                },
                "order_item_id": {
                    "type": "integer",
                    "nullable": true
                }
            }
        },
        "catalog.order_item_promotions": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "order_item_id": {
                    "type": "integer",
                    "nullable": true
                },
                "promotion_id": {
                    "type": "integer",
                    "nullable": true
                },
                "discount": {
                    "type": "decimal",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                }
            }
        },
        "catalog.order_items": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "integer",
                    "nullable": false
                },
                "order_id": {
                    "type": "integer",
                    "nullable": true
                },
                "item_id": {
                    "type": "integer",
                    "nullable": true
                },
                "amount": {
                    "type": "decimal",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "discounted_amount": {
                    "type": "decimal",
                    "nullable": true
                },
                "quantity": {
                    "type": "integer",
                    "nullable": false
                },
                "unit_price": {
                    "type": "decimal",
                    "nullable": true
                }
            }
        },
        "catalog.orders": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "integer",
                    "nullable": false
                },
                "account_id": {
                    "type": "integer",
                    "nullable": true
                },
                "canvas_user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "email": {
                    "type": "text",
                    "nullable": true
                },
                "name": {
                    "type": "text",
                    "nullable": true
                },
                "total": {
                    "type": "decimal",
                    "nullable": true
                },
                "currency": {
                    "type": "text",
                    "nullable": true
                },
                "purchased_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "full_id": {
                    "type": "text",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "source": {
                    "type": "text",
                    "nullable": true
                },
                "user_id": {
                    "type": "bigint",
                    "nullable": true
                }
            }
        },
        "catalog.payments": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "integer",
                    "nullable": false
                },
                "order_id": {
                    "type": "integer",
                    "nullable": true
                },
                "reference_id": {
                    "type": "text",
                    "nullable": true
                },
                "amount": {
                    "type": "decimal",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "status": {
                    "type": "text",
                    "nullable": true
                },
                "purchase_params": {
                    "type": "text",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                }
            }
        },
        "catalog.product_images": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "integer",
                    "nullable": false
                },
                "product_id": {
                    "type": "integer",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "image_file_name": {
                    "type": "text",
                    "nullable": true
                },
                "image_content_type": {
                    "type": "text",
                    "nullable": true
                },
                "image_file_size": {
                    "type": "integer",
                    "nullable": true
                },
                "image_updated_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                }
            }
        },
        "catalog.product_tags": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "integer",
                    "nullable": false
                },
                "product_id": {
                    "type": "integer",
                    "nullable": true
                },
                "tag_id": {
                    "type": "integer",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                }
            }
        },
        "catalog.products": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "integer",
                    "nullable": false
                },
                "visibility": {
                    "type": "text",
                    "nullable": true
                },
                "enrollment_open": {
                    "type": "boolean",
                    "nullable": false
                },
                "title": {
                    "type": "text",
                    "nullable": true
                },
                "start_date": {
                    "type": "timestamp",
                    "nullable": true
                },
                "end_date": {
                    "type": "timestamp",
                    "nullable": true
                },
                "description": {
                    "type": "text",
                    "nullable": true
                },
                "enrollment_fee": {
                    "type": "decimal",
                    "nullable": false
                },
                "canvas_course_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "path": {
                    "type": "text",
                    "nullable": true
                },
                "account_id": {
                    "type": "integer",
                    "nullable": true
                },
                "list_order": {
                    "type": "integer",
                    "nullable": true
                },
                "type": {
                    "type": "text",
                    "nullable": true
                },
                "teaser": {
                    "type": "text",
                    "nullable": true
                },
                "owner_id": {
                    "type": "integer",
                    "nullable": true
                },
                "canvas_section_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "sequential": {
                    "type": "boolean",
                    "nullable": false
                },
                "days_to_complete": {
                    "type": "integer",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "enrollment_cap": {
                    "type": "integer",
                    "nullable": true
                },
                "waitlist": {
                    "type": "boolean",
                    "nullable": false
                },
                "credits": {
                    "type": "decimal",
                    "nullable": true
                },
                "waitlist_cap": {
                    "type": "integer",
                    "nullable": true
                },
                "sku": {
                    "type": "text",
                    "nullable": true
                },
                "show_free_banner": {
                    "type": "boolean",
                    "nullable": false
                },
                "image_alt_text": {
                    "type": "text",
                    "nullable": true
                },
                "external_redirect_url": {
                    "type": "text",
                    "nullable": true
                },
                "allowed_payment_types": {
                    "type": "text",
                    "nullable": false
                },
                "workflow_state": {
                    "type": "text",
                    "nullable": false
                },
                "workflow_state_timestamp": {
                    "type": "timestamp",
                    "nullable": false
                },
                "detail_code": {
                    "type": "text",
                    "nullable": true
                },
                "bulk_purchase_disabled": {
                    "type": "boolean",
                    "nullable": false
                },
                "enrollment_open_from": {
                    "type": "timestamp",
                    "nullable": true
                },
                "enrollment_open_to": {
                    "type": "timestamp",
                    "nullable": true
                }
            }
        },
        "catalog.program_requirements": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "integer",
                    "nullable": false
                },
                "program_id": {
                    "type": "integer",
                    "nullable": true
                },
                "product_id": {
                    "type": "integer",
                    "nullable": true
                },
                "sequence": {
                    "type": "integer",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                }
            }
        },
        "catalog.promotions": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "integer",
                    "nullable": false
                },
                "account_id": {
                    "type": "integer",
                    "nullable": true
                },
                "product_id": {
                    "type": "integer",
                    "nullable": true
                },
                "amount": {
                    "type": "decimal",
                    "nullable": true
                },
                "discount_type": {
                    "type": "text",
                    "nullable": true
                },
                "code": {
                    "type": "text",
                    "nullable": true
                },
                "name": {
                    "type": "text",
                    "nullable": true
                },
                "description": {
                    "type": "text",
                    "nullable": true
                },
                "active": {
                    "type": "boolean",
                    "nullable": false
                },
                "start_date": {
                    "type": "timestamp",
                    "nullable": true
                },
                "end_date": {
                    "type": "timestamp",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "usage_type": {
                    "type": "text",
                    "nullable": false
                }
            }
        },
        "catalog.tags": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "integer",
                    "nullable": false
                },
                "account_id": {
                    "type": "integer",
                    "nullable": true
                },
                "name": {
                    "type": "text",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                }
            }
        },
        "catalog.themes": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "integer",
                    "nullable": false
                },
                "name": {
                    "type": "text",
                    "nullable": true
                },
                "css_content": {
                    "type": "text",
                    "nullable": true
                },
                "themeable_type": {
                    "type": "text",
                    "nullable": true
                },
                "themeable_id": {
                    "type": "integer",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "js_content": {
                    "type": "text",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "js_file_name": {
                    "type": "text",
                    "nullable": true
                },
                "js_content_type": {
                    "type": "text",
                    "nullable": true
                },
                "js_file_size": {
                    "type": "integer",
                    "nullable": true
                },
                "js_updated_at": {
                    "type": "timestamp",
                    "nullable": true
                },
                "css_file_name": {
                    "type": "text",
                    "nullable": true
                },
                "css_content_type": {
                    "type": "text",
                    "nullable": true
                },
                "css_file_size": {
                    "type": "integer",
                    "nullable": true
                },
                "css_updated_at": {
                    "type": "timestamp",
                    "nullable": true
                }
            }
        },
        "catalog.user_defined_fields": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "integer",
                    "nullable": false
                },
                "name": {
                    "type": "text",
                    "nullable": true
                },
                "label": {
                    "type": "text",
                    "nullable": true
                },
                "field_type": {
                    "type": "text",
                    "nullable": false
                },
                "required": {
                    "type": "boolean",
                    "nullable": false
                },
                "required_message": {
                    "type": "text",
                    "nullable": true
                },
                "account_id": {
                    "type": "integer",
                    "nullable": true
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "list_order": {
                    "type": "integer",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                }
            }
        },
        "catalog.users": {
            "keys": {
                "primary": "id"
            },
            "properties": {
                "id": {
                    "type": "bigint",
                    "nullable": false
                },
                "root_account_id": {
                    "type": "integer",
                    "nullable": false
                },
                "canvas_user_id": {
                    "type": "bigint",
                    "nullable": false
                },
                "registered_account_id": {
                    "type": "integer",
                    "nullable": true
                },
                "user_name": {
                    "type": "text",
                    "nullable": true
                },
                "email_address": {
                    "type": "text",
                    "nullable": true
                },
                "custom_fields": {
                    "type": "text",
                    "nullable": false
                },
                "created_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "updated_at": {
                    "type": "timestamp",
                    "nullable": false
                },
                "time_zone": {
                    "type": "text",
                    "nullable": true
                },
                "merged_into_user_id": {
                    "type": "bigint",
                    "nullable": true
                },
                "deleted_at": {
                    "type": "timestamp",
                    "nullable": true
                }
            }
        }
    },
    "relationships": [
        {
            "source": {
                "entity": "canvas.access_tokens",
                "property": "developer_key_id"
            },
            "target": {
                "entity": "canvas.developer_keys",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.access_tokens",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.access_tokens",
                "property": "real_user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.account_domains",
                "property": "account_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.account_users",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.account_users",
                "property": "account_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.account_users",
                "property": "role_id"
            },
            "target": {
                "entity": "canvas.roles",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.accounts",
                "property": "parent_account_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assessment_question_banks",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assessment_question_banks",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assessment_questions",
                "property": "assessment_question_bank_id"
            },
            "target": {
                "entity": "canvas.assessment_question_banks",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.asset_user_accesses",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.asset_user_accesses",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.asset_user_accesses",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.assessment_questions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.asset_user_accesses",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.asset_user_accesses",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.asset_user_accesses",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignment_groups",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignment_override_students",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignment_override_students",
                "property": "assignment_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignment_override_students",
                "property": "quiz_id"
            },
            "target": {
                "entity": "canvas.quizzes",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignment_override_students",
                "property": "assignment_override_id"
            },
            "target": {
                "entity": "canvas.assignment_overrides",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignment_overrides",
                "property": "set_id"
            },
            "target": {
                "entity": "canvas.groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignment_overrides",
                "property": "set_id"
            },
            "target": {
                "entity": "canvas.course_sections",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignment_overrides",
                "property": "quiz_id"
            },
            "target": {
                "entity": "canvas.quizzes",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignment_overrides",
                "property": "assignment_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignments",
                "property": "assignment_group_id"
            },
            "target": {
                "entity": "canvas.assignment_groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignments",
                "property": "grading_standard_id"
            },
            "target": {
                "entity": "canvas.grading_standards",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignments",
                "property": "group_category_id"
            },
            "target": {
                "entity": "canvas.group_categories",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignments",
                "property": "duplicate_of_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignments",
                "property": "grader_section_id"
            },
            "target": {
                "entity": "canvas.course_sections",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignments",
                "property": "final_grader_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignments",
                "property": "annotatable_attachment_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignments",
                "property": "parent_assignment_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachment_associations",
                "property": "attachment_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachment_associations",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.conversation_messages",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachment_associations",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.submissions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachment_associations",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachment_associations",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.assessment_questions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.content_exports",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.content_migrations",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.eportfolios",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.epub_exports",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.gradebook_uploads",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.group_and_membership_importers",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.submissions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.purgatories",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.folders",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.outcome_imports",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.quizzes",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.quiz_statistics",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.quiz_submissions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.sis_batches",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "folder_id"
            },
            "target": {
                "entity": "canvas.folders",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "replacement_attachment_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "usage_rights_id"
            },
            "target": {
                "entity": "canvas.usage_rights",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "root_attachment_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.calendar_events",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.calendar_events",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.appointment_groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.calendar_events",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.calendar_events",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.course_sections",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.calendar_events",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.calendar_events",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.calendar_events",
                "property": "parent_calendar_event_id"
            },
            "target": {
                "entity": "canvas.calendar_events",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.calendar_events",
                "property": "web_conference_id"
            },
            "target": {
                "entity": "canvas.web_conferences",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.canvadocs_annotation_contexts",
                "property": "attachment_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.canvadocs_annotation_contexts",
                "property": "submission_id"
            },
            "target": {
                "entity": "canvas.submissions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.collaborations",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.collaborations",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.collaborations",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.collaborations",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.comment_bank_items",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.comment_bank_items",
                "property": "course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.communication_channels",
                "property": "pseudonym_id"
            },
            "target": {
                "entity": "canvas.pseudonyms",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.communication_channels",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_migrations",
                "property": "attachment_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_migrations",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_migrations",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_migrations",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_migrations",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_migrations",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_migrations",
                "property": "overview_attachment_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_migrations",
                "property": "exported_attachment_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_migrations",
                "property": "source_course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_migrations",
                "property": "child_subscription_id"
            },
            "target": {
                "entity": "canvas.master_courses_child_subscriptions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_participation_counts",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_participation_counts",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_participations",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_participations",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.submissions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_shares",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_shares",
                "property": "content_export_id"
            },
            "target": {
                "entity": "canvas.content_exports",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_shares",
                "property": "sender_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_tags",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_tags",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.learning_outcome_groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_tags",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_tags",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_tags",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.quizzes",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_tags",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.assessment_question_banks",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.context_external_tools",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.discussion_topics",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.learning_outcomes",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.learning_outcome_groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.live_assessments_assessments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.lti_message_handlers",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.quizzes",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.rubrics",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.wiki_pages",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_tags",
                "property": "context_module_id"
            },
            "target": {
                "entity": "canvas.context_modules",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_tags",
                "property": "learning_outcome_id"
            },
            "target": {
                "entity": "canvas.learning_outcomes",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_tags",
                "property": "associated_asset_id"
            },
            "target": {
                "entity": "canvas.learning_outcome_groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.context_external_tools",
                "property": "developer_key_id"
            },
            "target": {
                "entity": "canvas.developer_keys",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.context_external_tools",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.context_external_tools",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.context_module_progressions",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.context_module_progressions",
                "property": "context_module_id"
            },
            "target": {
                "entity": "canvas.context_modules",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.context_modules",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.conversation_message_participants",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.conversation_message_participants",
                "property": "conversation_message_id"
            },
            "target": {
                "entity": "canvas.conversation_messages",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.conversation_message_participants",
                "property": "conversation_participant_id"
            },
            "target": {
                "entity": "canvas.conversation_participants",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.conversation_messages",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.conversation_messages",
                "property": "conversation_id"
            },
            "target": {
                "entity": "canvas.conversations",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.conversation_messages",
                "property": "author_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.conversation_messages",
                "property": "asset_id"
            },
            "target": {
                "entity": "canvas.submissions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.conversation_participants",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.conversations",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.conversations",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.conversations",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.course_account_associations",
                "property": "course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.course_account_associations",
                "property": "account_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.course_account_associations",
                "property": "course_section_id"
            },
            "target": {
                "entity": "canvas.course_sections",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.course_sections",
                "property": "course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.course_sections",
                "property": "sis_batch_id"
            },
            "target": {
                "entity": "canvas.sis_batches",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.course_sections",
                "property": "nonxlist_course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.course_sections",
                "property": "enrollment_term_id"
            },
            "target": {
                "entity": "canvas.enrollment_terms",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "account_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "grading_standard_id"
            },
            "target": {
                "entity": "canvas.grading_standards",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "wiki_id"
            },
            "target": {
                "entity": "canvas.wikis",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "abstract_course_id"
            },
            "target": {
                "entity": "canvas.abstract_courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "enrollment_term_id"
            },
            "target": {
                "entity": "canvas.enrollment_terms",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "template_course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "replacement_course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "homeroom_course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.custom_gradebook_column_data",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.custom_gradebook_column_data",
                "property": "custom_gradebook_column_id"
            },
            "target": {
                "entity": "canvas.custom_gradebook_columns",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.custom_gradebook_columns",
                "property": "course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.developer_key_account_bindings",
                "property": "account_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.developer_key_account_bindings",
                "property": "developer_key_id"
            },
            "target": {
                "entity": "canvas.developer_keys",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.developer_keys",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.developer_keys",
                "property": "account_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_entries",
                "property": "attachment_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_entries",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_entries",
                "property": "discussion_topic_id"
            },
            "target": {
                "entity": "canvas.discussion_topics",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_entries",
                "property": "parent_id"
            },
            "target": {
                "entity": "canvas.discussion_entries",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_entries",
                "property": "editor_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_entries",
                "property": "root_entry_id"
            },
            "target": {
                "entity": "canvas.discussion_entries",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_entry_participants",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_entry_participants",
                "property": "discussion_entry_id"
            },
            "target": {
                "entity": "canvas.discussion_entries",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topic_participants",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topic_participants",
                "property": "discussion_topic_id"
            },
            "target": {
                "entity": "canvas.discussion_topics",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topics",
                "property": "attachment_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topics",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topics",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topics",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topics",
                "property": "assignment_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topics",
                "property": "group_category_id"
            },
            "target": {
                "entity": "canvas.group_categories",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topics",
                "property": "cloned_item_id"
            },
            "target": {
                "entity": "canvas.cloned_items",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topics",
                "property": "root_topic_id"
            },
            "target": {
                "entity": "canvas.discussion_topics",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topics",
                "property": "old_assignment_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topics",
                "property": "external_feed_id"
            },
            "target": {
                "entity": "canvas.external_feeds",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topics",
                "property": "editor_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.enrollment_dates_overrides",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.enrollment_dates_overrides",
                "property": "enrollment_term_id"
            },
            "target": {
                "entity": "canvas.enrollment_terms",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.enrollment_terms",
                "property": "sis_batch_id"
            },
            "target": {
                "entity": "canvas.sis_batches",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.enrollment_terms",
                "property": "grading_period_group_id"
            },
            "target": {
                "entity": "canvas.grading_period_groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.enrollments",
                "property": "sis_batch_id"
            },
            "target": {
                "entity": "canvas.sis_batches",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.enrollments",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.enrollments",
                "property": "role_id"
            },
            "target": {
                "entity": "canvas.roles",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.enrollments",
                "property": "course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.enrollments",
                "property": "course_section_id"
            },
            "target": {
                "entity": "canvas.course_sections",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.enrollments",
                "property": "associated_user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.enrollments",
                "property": "sis_pseudonym_id"
            },
            "target": {
                "entity": "canvas.pseudonyms",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.favorites",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.favorites",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.favorites",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.feature_flags",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.feature_flags",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.feature_flags",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.folders",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.folders",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.folders",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.folders",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.folders",
                "property": "cloned_item_id"
            },
            "target": {
                "entity": "canvas.cloned_items",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.folders",
                "property": "parent_folder_id"
            },
            "target": {
                "entity": "canvas.folders",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.grading_period_groups",
                "property": "account_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.grading_period_groups",
                "property": "course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.grading_periods",
                "property": "grading_period_group_id"
            },
            "target": {
                "entity": "canvas.grading_period_groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.grading_standards",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.grading_standards",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.grading_standards",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.group_categories",
                "property": "sis_batch_id"
            },
            "target": {
                "entity": "canvas.sis_batches",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.group_categories",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.group_categories",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.group_memberships",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.group_memberships",
                "property": "sis_batch_id"
            },
            "target": {
                "entity": "canvas.sis_batches",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.group_memberships",
                "property": "group_id"
            },
            "target": {
                "entity": "canvas.groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.groups",
                "property": "account_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.groups",
                "property": "sis_batch_id"
            },
            "target": {
                "entity": "canvas.sis_batches",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.groups",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.groups",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.groups",
                "property": "group_category_id"
            },
            "target": {
                "entity": "canvas.group_categories",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.groups",
                "property": "wiki_id"
            },
            "target": {
                "entity": "canvas.wikis",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.groups",
                "property": "avatar_attachment_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.groups",
                "property": "leader_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.late_policies",
                "property": "course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_groups",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_groups",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_groups",
                "property": "learning_outcome_group_id"
            },
            "target": {
                "entity": "canvas.learning_outcome_groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_groups",
                "property": "root_learning_outcome_group_id"
            },
            "target": {
                "entity": "canvas.learning_outcome_groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_groups",
                "property": "outcome_import_id"
            },
            "target": {
                "entity": "canvas.outcome_imports",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_groups",
                "property": "source_outcome_group_id"
            },
            "target": {
                "entity": "canvas.learning_outcome_groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_question_results",
                "property": "learning_outcome_id"
            },
            "target": {
                "entity": "canvas.learning_outcomes",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_question_results",
                "property": "associated_asset_id"
            },
            "target": {
                "entity": "canvas.assessment_questions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_question_results",
                "property": "learning_outcome_result_id"
            },
            "target": {
                "entity": "canvas.learning_outcome_results",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_results",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_results",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_results",
                "property": "learning_outcome_id"
            },
            "target": {
                "entity": "canvas.learning_outcomes",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_results",
                "property": "associated_asset_id"
            },
            "target": {
                "entity": "canvas.assessment_questions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_results",
                "property": "associated_asset_id"
            },
            "target": {
                "entity": "canvas.live_assessments_assessments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_results",
                "property": "associated_asset_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_results",
                "property": "associated_asset_id"
            },
            "target": {
                "entity": "canvas.quizzes",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_results",
                "property": "association_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_results",
                "property": "association_id"
            },
            "target": {
                "entity": "canvas.quizzes",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_results",
                "property": "association_id"
            },
            "target": {
                "entity": "canvas.rubric_associations",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_results",
                "property": "content_tag_id"
            },
            "target": {
                "entity": "canvas.content_tags",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_results",
                "property": "artifact_id"
            },
            "target": {
                "entity": "canvas.live_assessments_submissions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_results",
                "property": "artifact_id"
            },
            "target": {
                "entity": "canvas.quiz_submissions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_results",
                "property": "artifact_id"
            },
            "target": {
                "entity": "canvas.rubric_assessments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcome_results",
                "property": "artifact_id"
            },
            "target": {
                "entity": "canvas.submissions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcomes",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcomes",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.learning_outcomes",
                "property": "outcome_import_id"
            },
            "target": {
                "entity": "canvas.outcome_imports",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.lti_line_items",
                "property": "assignment_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.lti_line_items",
                "property": "lti_resource_link_id"
            },
            "target": {
                "entity": "canvas.lti_resource_links",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.lti_resource_links",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.lti_resource_links",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.lti_resource_links",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.lti_resource_links",
                "property": "context_external_tool_id"
            },
            "target": {
                "entity": "canvas.context_external_tools",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.lti_results",
                "property": "submission_id"
            },
            "target": {
                "entity": "canvas.submissions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.lti_results",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.lti_results",
                "property": "lti_line_item_id"
            },
            "target": {
                "entity": "canvas.lti_line_items",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_child_content_tags",
                "property": "child_subscription_id"
            },
            "target": {
                "entity": "canvas.master_courses_child_subscriptions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_child_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.assessment_question_banks",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_child_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_child_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.assignment_groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_child_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_child_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.calendar_events",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_child_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.context_external_tools",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_child_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.context_modules",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_child_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.content_tags",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_child_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.discussion_topics",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_child_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.learning_outcomes",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_child_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.learning_outcome_groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_child_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.rubrics",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_child_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.wikis",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_child_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.wiki_pages",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_child_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.quizzes",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_child_subscriptions",
                "property": "master_template_id"
            },
            "target": {
                "entity": "canvas.master_courses_master_templates",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_child_subscriptions",
                "property": "child_course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_master_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.assessment_question_banks",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_master_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_master_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.assignment_groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_master_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_master_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.calendar_events",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_master_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.context_external_tools",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_master_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.context_modules",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_master_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.content_tags",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_master_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.discussion_topics",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_master_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.learning_outcomes",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_master_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.rubrics",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_master_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.wikis",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_master_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.wiki_pages",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_master_content_tags",
                "property": "content_id"
            },
            "target": {
                "entity": "canvas.quizzes",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_master_content_tags",
                "property": "master_template_id"
            },
            "target": {
                "entity": "canvas.master_courses_master_templates",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_master_migrations",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_master_migrations",
                "property": "master_template_id"
            },
            "target": {
                "entity": "canvas.master_courses_master_templates",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_master_templates",
                "property": "course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_master_templates",
                "property": "active_migration_id"
            },
            "target": {
                "entity": "canvas.master_courses_master_migrations",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_migration_results",
                "property": "child_subscription_id"
            },
            "target": {
                "entity": "canvas.master_courses_child_subscriptions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_migration_results",
                "property": "master_migration_id"
            },
            "target": {
                "entity": "canvas.master_courses_master_migrations",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_migration_results",
                "property": "content_migration_id"
            },
            "target": {
                "entity": "canvas.content_migrations",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.originality_reports",
                "property": "attachment_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.originality_reports",
                "property": "submission_id"
            },
            "target": {
                "entity": "canvas.submissions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.outcome_proficiencies",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.outcome_proficiencies",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.outcome_proficiency_ratings",
                "property": "outcome_proficiency_id"
            },
            "target": {
                "entity": "canvas.outcome_proficiencies",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.post_policies",
                "property": "course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.post_policies",
                "property": "assignment_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.pseudonyms",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.pseudonyms",
                "property": "account_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.pseudonyms",
                "property": "sis_batch_id"
            },
            "target": {
                "entity": "canvas.sis_batches",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.pseudonyms",
                "property": "authentication_provider_id"
            },
            "target": {
                "entity": "canvas.authentication_providers",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.quiz_groups",
                "property": "assessment_question_bank_id"
            },
            "target": {
                "entity": "canvas.assessment_question_banks",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.quiz_groups",
                "property": "quiz_id"
            },
            "target": {
                "entity": "canvas.quizzes",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.quiz_questions",
                "property": "quiz_id"
            },
            "target": {
                "entity": "canvas.quizzes",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.quiz_questions",
                "property": "quiz_group_id"
            },
            "target": {
                "entity": "canvas.quiz_groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.quiz_questions",
                "property": "assessment_question_id"
            },
            "target": {
                "entity": "canvas.assessment_questions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.quiz_submissions",
                "property": "submission_id"
            },
            "target": {
                "entity": "canvas.submissions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.quiz_submissions",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.quiz_submissions",
                "property": "quiz_id"
            },
            "target": {
                "entity": "canvas.quizzes",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.quizzes",
                "property": "assignment_group_id"
            },
            "target": {
                "entity": "canvas.assignment_groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.quizzes",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.quizzes",
                "property": "assignment_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.role_overrides",
                "property": "role_id"
            },
            "target": {
                "entity": "canvas.roles",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.role_overrides",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.roles",
                "property": "account_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.rubric_assessments",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.rubric_assessments",
                "property": "rubric_association_id"
            },
            "target": {
                "entity": "canvas.rubric_associations",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.rubric_assessments",
                "property": "artifact_id"
            },
            "target": {
                "entity": "canvas.submissions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.rubric_assessments",
                "property": "artifact_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.rubric_assessments",
                "property": "artifact_id"
            },
            "target": {
                "entity": "canvas.moderated_grading_provisional_grades",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.rubric_assessments",
                "property": "rubric_id"
            },
            "target": {
                "entity": "canvas.rubrics",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.rubric_assessments",
                "property": "assessor_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.rubric_associations",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.rubric_associations",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.rubric_associations",
                "property": "association_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.rubric_associations",
                "property": "association_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.rubric_associations",
                "property": "association_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.rubric_associations",
                "property": "rubric_id"
            },
            "target": {
                "entity": "canvas.rubrics",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.rubrics",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.rubrics",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.rubrics",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.score_statistics",
                "property": "assignment_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.scores",
                "property": "assignment_group_id"
            },
            "target": {
                "entity": "canvas.assignment_groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.scores",
                "property": "enrollment_id"
            },
            "target": {
                "entity": "canvas.enrollments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.scores",
                "property": "grading_period_id"
            },
            "target": {
                "entity": "canvas.grading_periods",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submission_comments",
                "property": "submission_id"
            },
            "target": {
                "entity": "canvas.submissions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submission_comments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submission_comments",
                "property": "author_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submission_comments",
                "property": "assessment_request_id"
            },
            "target": {
                "entity": "canvas.assessment_requests",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submission_comments",
                "property": "provisional_grade_id"
            },
            "target": {
                "entity": "canvas.moderated_grading_provisional_grades",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submission_versions",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submission_versions",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submission_versions",
                "property": "assignment_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submission_versions",
                "property": "version_id"
            },
            "target": {
                "entity": "canvas.versions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submissions",
                "property": "attachment_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submissions",
                "property": "course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submissions",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submissions",
                "property": "assignment_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submissions",
                "property": "group_id"
            },
            "target": {
                "entity": "canvas.groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submissions",
                "property": "quiz_submission_id"
            },
            "target": {
                "entity": "canvas.quiz_submissions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submissions",
                "property": "grading_period_id"
            },
            "target": {
                "entity": "canvas.grading_periods",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submissions",
                "property": "grader_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submissions",
                "property": "media_object_id"
            },
            "target": {
                "entity": "canvas.media_objects",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.user_account_associations",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.user_account_associations",
                "property": "account_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.users",
                "property": "merged_into_user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.web_conference_participants",
                "property": "web_conference_id"
            },
            "target": {
                "entity": "canvas.web_conferences",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.web_conference_participants",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.web_conferences",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.web_conferences",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.web_conferences",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.web_conferences",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.wiki_pages",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.wiki_pages",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.wiki_pages",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.wiki_pages",
                "property": "assignment_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.wiki_pages",
                "property": "wiki_id"
            },
            "target": {
                "entity": "canvas.wikis",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.wiki_pages",
                "property": "old_assignment_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.accounts",
                "property": "parent_account_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assessment_question_banks",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assessment_question_banks",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assessment_questions",
                "property": "assessment_question_bank_id"
            },
            "target": {
                "entity": "canvas.assessment_question_banks",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignment_groups",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignments",
                "property": "assignment_group_id"
            },
            "target": {
                "entity": "canvas.assignment_groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignments",
                "property": "grading_standard_id"
            },
            "target": {
                "entity": "canvas.grading_standards",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignments",
                "property": "group_category_id"
            },
            "target": {
                "entity": "canvas.group_categories",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignments",
                "property": "duplicate_of_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignments",
                "property": "grader_section_id"
            },
            "target": {
                "entity": "canvas.course_sections",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignments",
                "property": "final_grader_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignments",
                "property": "annotatable_attachment_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.assignments",
                "property": "parent_assignment_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.assessment_questions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.content_exports",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.content_migrations",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.eportfolios",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.epub_exports",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.gradebook_uploads",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.group_and_membership_importers",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.submissions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.purgatories",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.folders",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.outcome_imports",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.quizzes",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.quiz_statistics",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.quiz_submissions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.sis_batches",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "folder_id"
            },
            "target": {
                "entity": "canvas.folders",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "replacement_attachment_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "usage_rights_id"
            },
            "target": {
                "entity": "canvas.usage_rights",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.attachments",
                "property": "root_attachment_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_migrations",
                "property": "attachment_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_migrations",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_migrations",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_migrations",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_migrations",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_migrations",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_migrations",
                "property": "overview_attachment_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_migrations",
                "property": "exported_attachment_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_migrations",
                "property": "source_course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.content_migrations",
                "property": "child_subscription_id"
            },
            "target": {
                "entity": "canvas.master_courses_child_subscriptions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.conversations",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.conversations",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.conversations",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.course_sections",
                "property": "course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.course_sections",
                "property": "sis_batch_id"
            },
            "target": {
                "entity": "canvas.sis_batches",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.course_sections",
                "property": "nonxlist_course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.course_sections",
                "property": "enrollment_term_id"
            },
            "target": {
                "entity": "canvas.enrollment_terms",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "account_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "grading_standard_id"
            },
            "target": {
                "entity": "canvas.grading_standards",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "wiki_id"
            },
            "target": {
                "entity": "canvas.wikis",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "abstract_course_id"
            },
            "target": {
                "entity": "canvas.abstract_courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "enrollment_term_id"
            },
            "target": {
                "entity": "canvas.enrollment_terms",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "template_course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "replacement_course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "homeroom_course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.developer_keys",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.developer_keys",
                "property": "account_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topics",
                "property": "attachment_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topics",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topics",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topics",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topics",
                "property": "assignment_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topics",
                "property": "group_category_id"
            },
            "target": {
                "entity": "canvas.group_categories",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topics",
                "property": "cloned_item_id"
            },
            "target": {
                "entity": "canvas.cloned_items",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topics",
                "property": "root_topic_id"
            },
            "target": {
                "entity": "canvas.discussion_topics",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topics",
                "property": "old_assignment_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topics",
                "property": "external_feed_id"
            },
            "target": {
                "entity": "canvas.external_feeds",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.discussion_topics",
                "property": "editor_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.enrollment_terms",
                "property": "sis_batch_id"
            },
            "target": {
                "entity": "canvas.sis_batches",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.enrollment_terms",
                "property": "grading_period_group_id"
            },
            "target": {
                "entity": "canvas.grading_period_groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.folders",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.folders",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.folders",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.folders",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.folders",
                "property": "cloned_item_id"
            },
            "target": {
                "entity": "canvas.cloned_items",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.folders",
                "property": "parent_folder_id"
            },
            "target": {
                "entity": "canvas.folders",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.grading_period_groups",
                "property": "account_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.grading_period_groups",
                "property": "course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.grading_periods",
                "property": "grading_period_group_id"
            },
            "target": {
                "entity": "canvas.grading_period_groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.grading_standards",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.grading_standards",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.grading_standards",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.group_categories",
                "property": "sis_batch_id"
            },
            "target": {
                "entity": "canvas.sis_batches",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.group_categories",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.group_categories",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.groups",
                "property": "account_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.groups",
                "property": "sis_batch_id"
            },
            "target": {
                "entity": "canvas.sis_batches",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.groups",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.groups",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.groups",
                "property": "group_category_id"
            },
            "target": {
                "entity": "canvas.group_categories",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.groups",
                "property": "wiki_id"
            },
            "target": {
                "entity": "canvas.wikis",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.groups",
                "property": "avatar_attachment_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.groups",
                "property": "leader_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_child_subscriptions",
                "property": "master_template_id"
            },
            "target": {
                "entity": "canvas.master_courses_master_templates",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_child_subscriptions",
                "property": "child_course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_master_migrations",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_master_migrations",
                "property": "master_template_id"
            },
            "target": {
                "entity": "canvas.master_courses_master_templates",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_master_templates",
                "property": "course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.master_courses_master_templates",
                "property": "active_migration_id"
            },
            "target": {
                "entity": "canvas.master_courses_master_migrations",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.quiz_submissions",
                "property": "submission_id"
            },
            "target": {
                "entity": "canvas.submissions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.quiz_submissions",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.quiz_submissions",
                "property": "quiz_id"
            },
            "target": {
                "entity": "canvas.quizzes",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.quizzes",
                "property": "assignment_group_id"
            },
            "target": {
                "entity": "canvas.assignment_groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.quizzes",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.quizzes",
                "property": "assignment_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submissions",
                "property": "attachment_id"
            },
            "target": {
                "entity": "canvas.attachments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submissions",
                "property": "course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submissions",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submissions",
                "property": "assignment_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submissions",
                "property": "group_id"
            },
            "target": {
                "entity": "canvas.groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submissions",
                "property": "quiz_submission_id"
            },
            "target": {
                "entity": "canvas.quiz_submissions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submissions",
                "property": "grading_period_id"
            },
            "target": {
                "entity": "canvas.grading_periods",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submissions",
                "property": "grader_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.submissions",
                "property": "media_object_id"
            },
            "target": {
                "entity": "canvas.media_objects",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.users",
                "property": "merged_into_user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas_logs.web_logs",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas_logs.web_logs",
                "property": "real_user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas_logs.web_logs",
                "property": "course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas_logs.web_logs",
                "property": "quiz_id"
            },
            "target": {
                "entity": "canvas.quizzes",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas_logs.web_logs",
                "property": "discussion_id"
            },
            "target": {
                "entity": "canvas.discussion_topics",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas_logs.web_logs",
                "property": "conversation_id"
            },
            "target": {
                "entity": "canvas.conversations",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas_logs.web_logs",
                "property": "assignment_id"
            },
            "target": {
                "entity": "canvas.assignments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas_logs.web_logs",
                "property": "developer_key_id"
            },
            "target": {
                "entity": "canvas.developer_keys",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas_logs.web_logs",
                "property": "web_application_controller"
            },
            "target": {
                "entity": "canvas_logs.Controller",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas_logs.web_logs",
                "property": "web_application_action"
            },
            "target": {
                "entity": "canvas_logs.Action",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.accounts",
                "property": "parent_account_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.course_sections",
                "property": "course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.course_sections",
                "property": "sis_batch_id"
            },
            "target": {
                "entity": "canvas.sis_batches",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.course_sections",
                "property": "nonxlist_course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.course_sections",
                "property": "enrollment_term_id"
            },
            "target": {
                "entity": "canvas.enrollment_terms",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "account_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "grading_standard_id"
            },
            "target": {
                "entity": "canvas.grading_standards",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "wiki_id"
            },
            "target": {
                "entity": "canvas.wikis",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "abstract_course_id"
            },
            "target": {
                "entity": "canvas.abstract_courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "enrollment_term_id"
            },
            "target": {
                "entity": "canvas.enrollment_terms",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "template_course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "replacement_course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.courses",
                "property": "homeroom_course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.enrollment_terms",
                "property": "sis_batch_id"
            },
            "target": {
                "entity": "canvas.sis_batches",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.enrollment_terms",
                "property": "grading_period_group_id"
            },
            "target": {
                "entity": "canvas.grading_period_groups",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.enrollments",
                "property": "sis_batch_id"
            },
            "target": {
                "entity": "canvas.sis_batches",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.enrollments",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.enrollments",
                "property": "role_id"
            },
            "target": {
                "entity": "canvas.roles",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.enrollments",
                "property": "course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.enrollments",
                "property": "course_section_id"
            },
            "target": {
                "entity": "canvas.course_sections",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.enrollments",
                "property": "associated_user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.enrollments",
                "property": "sis_pseudonym_id"
            },
            "target": {
                "entity": "canvas.pseudonyms",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.grading_period_groups",
                "property": "account_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.grading_period_groups",
                "property": "course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.grading_standards",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.grading_standards",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.grading_standards",
                "property": "context_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.pseudonyms",
                "property": "user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.pseudonyms",
                "property": "account_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.pseudonyms",
                "property": "sis_batch_id"
            },
            "target": {
                "entity": "canvas.sis_batches",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.pseudonyms",
                "property": "authentication_provider_id"
            },
            "target": {
                "entity": "canvas.authentication_providers",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.roles",
                "property": "account_id"
            },
            "target": {
                "entity": "canvas.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "canvas.users",
                "property": "merged_into_user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.account_admins",
                "property": "canvas_user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.account_admins",
                "property": "account_id"
            },
            "target": {
                "entity": "catalog.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.account_admins",
                "property": "root_account_id"
            },
            "target": {
                "entity": "catalog.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.accounts",
                "property": "parent_id"
            },
            "target": {
                "entity": "catalog.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.applicants",
                "property": "product_id"
            },
            "target": {
                "entity": "catalog.products",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.applicants",
                "property": "canvas_user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.bulk_checkout_promotions",
                "property": "promotion_id"
            },
            "target": {
                "entity": "catalog.promotions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.bulk_checkouts",
                "property": "canvas_user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.bulk_checkouts",
                "property": "product_id"
            },
            "target": {
                "entity": "catalog.products",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.bulk_checkouts",
                "property": "account_id"
            },
            "target": {
                "entity": "catalog.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.bulk_checkouts",
                "property": "order_id"
            },
            "target": {
                "entity": "catalog.orders",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.bulk_invitations",
                "property": "order_item_id"
            },
            "target": {
                "entity": "catalog.order_items",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.bulk_invitations",
                "property": "product_id"
            },
            "target": {
                "entity": "catalog.products",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.bulk_invitations",
                "property": "enrollment_id"
            },
            "target": {
                "entity": "catalog.enrollments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.cart_item_promotions",
                "property": "cart_item_id"
            },
            "target": {
                "entity": "catalog.cart_items",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.cart_item_promotions",
                "property": "promotion_id"
            },
            "target": {
                "entity": "catalog.promotions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.cart_items",
                "property": "cart_id"
            },
            "target": {
                "entity": "catalog.carts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.cart_items",
                "property": "product_id"
            },
            "target": {
                "entity": "catalog.products",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.carts",
                "property": "account_id"
            },
            "target": {
                "entity": "catalog.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.carts",
                "property": "canvas_user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.carts",
                "property": "order_id"
            },
            "target": {
                "entity": "catalog.orders",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.carts",
                "property": "root_account_id"
            },
            "target": {
                "entity": "catalog.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.categories",
                "property": "account_id"
            },
            "target": {
                "entity": "catalog.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.certificate_templates",
                "property": "account_id"
            },
            "target": {
                "entity": "catalog.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.certificates",
                "property": "product_id"
            },
            "target": {
                "entity": "catalog.products",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.certificates",
                "property": "certificate_template_id"
            },
            "target": {
                "entity": "catalog.certificate_templates",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.certificates",
                "property": "custom_template_id"
            },
            "target": {
                "entity": "catalog.certificate_templates",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.custom_emails",
                "property": "account_id"
            },
            "target": {
                "entity": "catalog.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.email_layouts",
                "property": "account_id"
            },
            "target": {
                "entity": "catalog.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.enrollments",
                "property": "canvas_user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.enrollments",
                "property": "product_id"
            },
            "target": {
                "entity": "catalog.products",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.enrollments",
                "property": "root_program_id"
            },
            "target": {
                "entity": "catalog.products",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.enrollments",
                "property": "external_id"
            },
            "target": {
                "entity": "canvas.enrollments",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.enrollments",
                "property": "order_item_id"
            },
            "target": {
                "entity": "catalog.order_items",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.order_item_promotions",
                "property": "order_item_id"
            },
            "target": {
                "entity": "catalog.order_items",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.order_item_promotions",
                "property": "promotion_id"
            },
            "target": {
                "entity": "catalog.promotions",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.order_items",
                "property": "order_id"
            },
            "target": {
                "entity": "catalog.orders",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.order_items",
                "property": "item_id"
            },
            "target": {
                "entity": "catalog.products",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.orders",
                "property": "account_id"
            },
            "target": {
                "entity": "catalog.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.orders",
                "property": "canvas_user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.orders",
                "property": "user_id"
            },
            "target": {
                "entity": "catalog.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.payments",
                "property": "order_id"
            },
            "target": {
                "entity": "catalog.orders",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.product_images",
                "property": "product_id"
            },
            "target": {
                "entity": "catalog.products",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.product_tags",
                "property": "product_id"
            },
            "target": {
                "entity": "catalog.products",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.product_tags",
                "property": "tag_id"
            },
            "target": {
                "entity": "catalog.tags",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.products",
                "property": "canvas_course_id"
            },
            "target": {
                "entity": "canvas.courses",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.products",
                "property": "account_id"
            },
            "target": {
                "entity": "catalog.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.program_requirements",
                "property": "program_id"
            },
            "target": {
                "entity": "catalog.products",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.program_requirements",
                "property": "product_id"
            },
            "target": {
                "entity": "catalog.products",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.promotions",
                "property": "account_id"
            },
            "target": {
                "entity": "catalog.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.promotions",
                "property": "product_id"
            },
            "target": {
                "entity": "catalog.products",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.tags",
                "property": "account_id"
            },
            "target": {
                "entity": "catalog.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.themes",
                "property": "themeable_id"
            },
            "target": {
                "entity": "catalog.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.themes",
                "property": "themeable_id"
            },
            "target": {
                "entity": "catalog.products",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.user_defined_fields",
                "property": "account_id"
            },
            "target": {
                "entity": "catalog.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.users",
                "property": "root_account_id"
            },
            "target": {
                "entity": "catalog.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.users",
                "property": "canvas_user_id"
            },
            "target": {
                "entity": "canvas.users",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.users",
                "property": "registered_account_id"
            },
            "target": {
                "entity": "catalog.accounts",
                "property": "id"
            }
        },
        {
            "source": {
                "entity": "catalog.users",
                "property": "merged_into_user_id"
            },
            "target": {
                "entity": "catalog.users",
                "property": "id"
            }
        }
    ]
};