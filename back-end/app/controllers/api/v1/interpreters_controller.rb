class Api::V1::InterpretersController < ApplicationController
    before_action :set_interpreter, only: [:show, :update, :destroy]

    # GET /interpreters
    def index
      @interpreters = Interpreter.all
  
      render json: @interpreters, except: [:created_at, :updated_at], include: [:city, :language]
    end
  
    # GET /interpreters/1
    def show
      render json: @interpreter, except: [:created_at, :updated_at], include: [:city, :language]
    end
  
    # POST /interpreters
    def create
      @interpreter = Interpreter.new(interpreter_params)
      # byebug
      if @interpreter.save
        render json: {status: 201, interpreter: @interpreter}, status: :created#, location: @interpreter
      else
        render json: {
          status: 422,
          errors: @interpreter.errors.full_messages.join(", ")
        }, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /interpreters/1
    def update
      if @interpreter.update(interpreter_params)
        render json: @interpreter
      else
        render json: @interpreter.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /interpreters/1
    def destroy
      # @interpreter.destroy
      # byebug
      if @interpreter.destroy
        render json: {message: "Successfully deleted"}
      #end
      else
        render json: {message: "Failed to delete"}
      end
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_interpreter
        @interpreter = Interpreter.find_by(id: (params[:id]))
      end
  
      # Only allow a list of trusted parameters through.
      def interpreter_params
        params.require(:interpreter).permit(:name, :email, :phone, :notes, :city_id, :language_id)
      end
end
