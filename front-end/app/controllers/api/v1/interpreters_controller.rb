class Api::V1::InterpretersController < ApplicationController
    before_action :set_interpreter, only: [:show, :update, :destroy]

    # GET /interpreters
    def index
      @interpreters = Interpreter.all
  
      render json: @interpreters
    end
  
    # GET /interpreters/1
    def show
      render json: @interpreter
    end
  
    # POST /interpreters
    def create
      @interpreter = Interpreter.new(interpreter_params)
  
      if @interpreter.save
        render json: @interpreter, status: :created, location: @interpreter
      else
        render json: @interpreter.errors, status: :unprocessable_entity
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
      @interpreter.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_interpreter
        @interpreter = Interpreter.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def interpreter_params
        params.require(:interpreter).permit(:name, :email, :phone, :notes, :city_id, :language_id)
      end
end
