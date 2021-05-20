require "test_helper"

class InterpretersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @interpreter = interpreters(:one)
  end

  test "should get index" do
    get interpreters_url, as: :json
    assert_response :success
  end

  test "should create interpreter" do
    assert_difference('Interpreter.count') do
      post interpreters_url, params: { interpreter: { city_id: @interpreter.city_id, email: @interpreter.email, language_id: @interpreter.language_id, name: @interpreter.name, notes: @interpreter.notes, phone: @interpreter.phone } }, as: :json
    end

    assert_response 201
  end

  test "should show interpreter" do
    get interpreter_url(@interpreter), as: :json
    assert_response :success
  end

  test "should update interpreter" do
    patch interpreter_url(@interpreter), params: { interpreter: { city_id: @interpreter.city_id, email: @interpreter.email, language_id: @interpreter.language_id, name: @interpreter.name, notes: @interpreter.notes, phone: @interpreter.phone } }, as: :json
    assert_response 200
  end

  test "should destroy interpreter" do
    assert_difference('Interpreter.count', -1) do
      delete interpreter_url(@interpreter), as: :json
    end

    assert_response 204
  end
end
